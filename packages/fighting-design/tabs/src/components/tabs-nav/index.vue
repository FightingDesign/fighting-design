<script lang="ts" setup name="FTabsNav">
  import { Props } from './props'
  import { isString, sizeToNum, isBoolean } from '../../../../_utils'
  import { computed, getCurrentInstance, nextTick, ref, useSlots, watch } from 'vue'
  import { FIconCrossVue, FIconPlusVue } from '../../../../_svg'
  import { FSvgIcon } from '../../../../svg-icon'
  import type { TabsPaneName } from '../../interface'
  import type { ComponentInternalInstance, CSSProperties } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits<{
    (e: 'set-current-name', name: TabsPaneName): void
    (e: 'edit', action: 'remove' | 'add', name?: TabsPaneName, i?: number): void
  }>()

  const currentIndex = computed(() =>
    prop.navs
      ? Math.max(
          prop.navs.findIndex(e => e.name === prop.currentName),
          0
        )
      : 0
  )

  const instance: ComponentInternalInstance | null = getCurrentInstance()

  const clickNavItem = async (name: TabsPaneName): Promise<void> => {
    let res: boolean | void = true
    if (prop.beforeEnter) {
      res = await prop.beforeEnter(name)
    }
    if (isBoolean(res) && !res) return

    emit('set-current-name', name)
  }

  const editItem = (action: 'remove' | 'add', name?: TabsPaneName, i?: number): void => {
    emit('edit', action, name, i)
  }
  /**
   * 仅针对card模式下的，items的样式
   *
   * 估算最长元素active状态下的高度，设置为固定高度
   *
   * 防止在切换标签时出现跳动的情况
   */
  const wrapperStyle = ref<CSSProperties>({})
  const updateWrapperStyle = async (): Promise<void> => {
    await nextTick()
    if (!prop.navs) return
    const positionVar: {
      a: keyof HTMLObjectElement
      b: keyof HTMLObjectElement
      c: keyof CSSStyleDeclaration
    } = { a: 'height', b: 'offsetHeight', c: 'paddingBottom' }
    if (prop.position === 'left' || prop.position === 'right') {
      positionVar.a = 'width'
      positionVar.b = 'offsetWidth'
    } else {
      positionVar.a = 'height'
      positionVar.b = 'offsetHeight'
    }

    switch (prop.position) {
      case 'top':
        positionVar.c = 'paddingBottom'
        break
      case 'bottom':
        positionVar.c = 'paddingTop'
        break
      case 'left':
        positionVar.c = 'paddingRight'
        break
      case 'right':
        positionVar.c = 'paddingLeft'
        break
    }
    // 当前nav的高度
    if (!instance || !instance.subTree.el) return
    const wrapperEl = instance.subTree.el as HTMLObjectElement
    // 获取除active元素外最高的子元素
    const children = instance.subTree.el.querySelectorAll('.f-tabs-nav--item:not(.f-tabs-nav--item__active)') as HTMLObjectElement[]
    const maxChildren = Array.from(children).reduce((pre, cur) => {
      pre = (cur[positionVar.b] as Number) > (pre[positionVar.b] as Number) ? cur : pre
      return pre
    }, children[0])
    // 最高的子元素的padding
    const padding = sizeToNum(window.getComputedStyle(maxChildren)[positionVar.c] as string)
    // css变量
    const cardActiveDiffHeight = window.getComputedStyle(wrapperEl).getPropertyValue('--cardActiveDiffHeight')
    // 最高的子元素avtive状态下的高度
    const maxChildrenNum = sizeToNum(maxChildren[positionVar.b]) - padding + sizeToNum(cardActiveDiffHeight)

    /**
     * 比较标签显示高度(wrapperEl)、最高元素预估高度，取得最大值
     *
     * 估值高度取得是除active外的元素
     * 如果当前active的元素本身是最大的话，会体现在wrapperEl.offset上
     */
    wrapperStyle.value = {
      [positionVar.a]: Math.max(wrapperEl[positionVar.b], maxChildrenNum) + 'px'
    }
  }

  /**
   * 仅针对line模式下的，活动线条的样式
   */
  const activeLineStyle = ref<CSSProperties>({})

  const updateActiveLineStyle = async (): Promise<void> => {
    await nextTick()
    if (!instance || !instance.subTree.el) return
    const { position } = prop
    const activeStyle: CSSProperties = {}
    const children = instance.subTree.el.querySelectorAll('.f-tabs-nav--item') as HTMLElement[]

    if (!children.length) return
    const nextItem = children[currentIndex.value]

    const nextItemStyle = window.getComputedStyle(nextItem)
    if (position === 'top' || position === 'bottom') {
      activeStyle.width = nextItem.clientWidth - sizeToNum(nextItemStyle.paddingLeft) - sizeToNum(nextItemStyle.paddingRight) + 'px'
      activeStyle.left = `${nextItem.offsetLeft + sizeToNum(nextItemStyle.paddingLeft)}px`
      activeStyle.bottom = '0px'
    } else {
      activeStyle.height = nextItem.clientHeight - sizeToNum(nextItemStyle.paddingTop) - sizeToNum(nextItemStyle.paddingBottom) + 'px'
      activeStyle.top = `${nextItem.offsetTop + sizeToNum(nextItemStyle.paddingTop)}px`
      if (position === 'left') {
        activeStyle.right = '0px'
      } else {
        activeStyle.left = '0px'
      }
    }
    activeLineStyle.value = activeStyle
  }

  /**
   * 左右侧的滚动阴影
   */
  const leftReachedRef = ref(false)
  const rightReachedRef = ref(false)

  const deriveScrollShadow = (el: HTMLElement | null): void => {
    if (!el) return
    const { scrollLeft, scrollWidth, offsetWidth } = el
    leftReachedRef.value = scrollLeft > 0
    rightReachedRef.value = scrollLeft + offsetWidth < scrollWidth - 1 // -1 是因为计算有误差
  }

  /**
   * wheel => 滚轮事件
   * https://www.runoob.com/jsref/event-onwheel.html
   *
   * 实现横向滚动效果
   */
  const handleWheel = (e: WheelEvent): void => {
    ;(e.currentTarget as HTMLElement).scrollLeft += e.deltaY + e.deltaX
    deriveScrollShadow(e.currentTarget as HTMLElement)
  }

  /**
   * 风格样式调整
   */
  watch([currentIndex], () => {
    if (prop.type === 'line') {
      updateActiveLineStyle()
    }
  })
  watch(
    [(): unknown => prop.position, (): unknown => prop.type, (): unknown => prop.justifyContent],
    () => {
      wrapperStyle.value = {}
      if (prop.type === 'card') {
        updateWrapperStyle()
        if (prop.position === 'left' || prop.position === 'right') {
          leftReachedRef.value = false
          rightReachedRef.value = false
          return
        }
      }

      if (prop.type === 'line') {
        updateActiveLineStyle()
        if (prop.position === 'top' || prop.position === 'bottom') {
          wrapperStyle.value = {
            justifyContent: prop.justifyContent
          }
        }
      }
    },
    {
      immediate: true
    }
  )

  const classList = computed(() => {
    const { type, position } = prop
    return [`f-tabs-nav__type_${type}`, `f-tabs-nav__type_${type}_${position}`] as const
  })

  const scrollClassList = computed(() => {
    return {
      'f-tabs-nav__scroll_before': leftReachedRef.value,
      'f-tabs-nav__scroll_after': rightReachedRef.value
    } as const
  })

  /**
   * 事件处理
   */
  const trigger = computed(() => {
    return prop.trigger === 'hover' ? 'mouseenter' : 'click'
  })

  const slots = useSlots()
</script>

<template>
  <div class="f-tabs-nav" :class="classList">
    <div v-if="slots.prefix" class="f-tabs-nav__prefix">
      <slot name="prefix"></slot>
    </div>
    <div class="f-tabs-nav__main" :class="scrollClassList">
      <div class="f-tabs-nav__scroll" @wheel.passive="handleWheel">
        <div class="f-tabs-nav__wrapper" :style="wrapperStyle">
          <div
            v-for="(item, i) in prop.navs"
            :key="item.name"
            class="f-tabs-nav--item"
            :class="[
              {
                'f-tabs-nav--item__active': item.name === prop.currentName
              }
            ]"
            @[trigger]="clickNavItem(item.name)"
          >
            <span v-if="isString(item.label)">{{ item.label }}</span>
            <div v-else>
              <component :is="item.label"></component>
            </div>
            <f-svg-icon
              v-if="type === 'card' && editStatus"
              class="f-tabs-nav--item__card_close"
              :icon="FIconCrossVue"
              @click.stop="editItem('remove', item.name, i)"
            ></f-svg-icon>
          </div>
          <div v-if="type === 'card' && editStatus" class="f-tabs-nav--item" @click="editItem('add')">
            <f-svg-icon :icon="FIconPlusVue" color="#666"></f-svg-icon>
          </div>
          <div v-if="prop.type === 'line'" class="f-tabs-nav--line__active" :style="activeLineStyle"></div>
        </div>
      </div>
    </div>
    <div v-if="slots.suffix" class="f-tabs-nav__suffix">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>
