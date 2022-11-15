<script lang="ts" setup name="FTabsNav">
  import { Emits, Props } from './props'
  import type { TabsNavPropsType } from './interface'
  import { isString, sizeToNum } from '../../../../_utils'
  import { TabsPaneName } from '../../interface';
  import { ComponentInternalInstance, computed, CSSProperties, getCurrentInstance, nextTick, ref, watch } from 'vue';
  import { FIconCrossVue } from '../../../../_svg'
  import { FSvgIcon } from '../../../../svg-icon'

  const prop: TabsNavPropsType = defineProps(Props)

  const emit = defineEmits(Emits)

  const currentIndex = computed(() => Math.max(prop.navs.findIndex(e => e.name === prop.currentName), 0))

  const instance:ComponentInternalInstance = getCurrentInstance()

  async function clickNavItem(name: TabsPaneName) {
    let res:boolean | void = true
    if (prop.beforeEnter) {
      res = await prop.beforeEnter(name)
    }
    if (typeof res === 'boolean' && !res) return
  
    emit('set-current-name', name)
  }

  async function closeItem(name: TabsPaneName, i: number) {
    emit('edit', name, i)
  }
  /**
   * 仅针对card模式下的，items的样式
   * 
   * 估算最长元素active状态下的高度，设置为固定高度
   * 
   * 防止在切换标签时出现跳动的情况
   */
  const wrapperStyle = ref<CSSProperties>({})
  async function updateWrapperStyle() {
    await nextTick()
    if (!prop.navs.length) return
    const positionVar = {a: 'height', b: 'offsetHeight', c: 'paddingBottom'}
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
    const wrapperEl = instance.subTree.el as HTMLElement
    // 获取除active元素外最高的子元素
    const children = instance.subTree.el.querySelectorAll('.f-tabs-nav--item:not(.f-tabs-nav--item__active)') as HTMLElement[]
    const maxChildren = Array.from(children).reduce((pre, cur) => {
      pre = cur[positionVar.b] > pre[positionVar.b] ? cur : pre
      return pre
    }, children[0])
    // 最高的子元素的padding
    const padding = sizeToNum(window.getComputedStyle(maxChildren)[positionVar.c])
    // css变量
    const cardActiveDiffHeight = window.getComputedStyle(wrapperEl).getPropertyValue('--cardActiveDiffHeight')
    // 最高的子元素avtive状态下的高度
    const maxChildrenNum = sizeToNum(maxChildren[positionVar.b]) - padding + sizeToNum(cardActiveDiffHeight)

    /**
     * 比较当前储存高度(初次为0)、标签显示高度(wrapperEl)、最高元素预估高度，取得最大值
     * 
     * 估值高度取得是除active外的元素
     * 如果当前active的元素本身是最大的话，会体现在wrapperEl.offset上
     */
    wrapperStyle.value = {[positionVar.a]: Math.max(wrapperEl[positionVar.b], maxChildrenNum) + 'px'} 
  }


  /**
   * 仅针对line模式下的，活动线条的样式
   */
  const activeLineStyle = ref<CSSProperties>({})

  async function updateActiveLineStyle() {
    await nextTick()
    const { position } = prop
    const activeStyle:CSSProperties = {}
    const children = instance.subTree.el.querySelectorAll('.f-tabs-nav--item') as HTMLElement[]
    
    if (!children.length) return
    const nextItem = children[currentIndex.value]

    const parent = nextItem.parentElement
    const nextItemStyle = window.getComputedStyle(nextItem)
    console.log(nextItem.offsetLeft , parent.offsetLeft)
    if (position === 'top' || position === 'bottom') {
      activeStyle.width = nextItem.clientWidth - Number.parseFloat(nextItemStyle.paddingLeft) - Number.parseFloat(nextItemStyle.paddingRight) + 'px'
      activeStyle.left = `${nextItem.offsetLeft + Number.parseFloat(nextItemStyle.paddingLeft)}px`
      activeStyle.bottom = '0px'
    } else {
      activeStyle.height = nextItem.clientHeight - Number.parseFloat(nextItemStyle.paddingTop) - Number.parseFloat(nextItemStyle.paddingBottom) + 'px'
      activeStyle.top = `${nextItem.offsetTop + Number.parseFloat(nextItemStyle.paddingTop)}px`
      if (position === 'left') {
        activeStyle.right = '0px'
      } else {
        activeStyle.left = '0px'
      }
    }
    activeLineStyle.value = activeStyle
  }

  /**
   * whell => 滚轮事件
   * https://www.runoob.com/jsref/event-onwheel.html
   * 
   * 实现横向滚动效果
   */
  function handleWheel(e) {
    ;(e.currentTarget as HTMLElement).scrollLeft += e.deltaY + e.deltaX
    deriveScrollShadow(e.currentTarget)
  }

  const leftReachedRef = ref(false)
  const rightReachedRef = ref(false)

  function deriveScrollShadow (el: HTMLElement | null): void {
    if (!el) return
    const { scrollLeft, scrollWidth, offsetWidth } = el
    leftReachedRef.value = scrollLeft > 0
    rightReachedRef.value = scrollLeft + offsetWidth < scrollWidth - 1 // -1 是因为计算有误差
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
    [
      () => prop.position,
      () => prop.type, 
      () => prop.justifyContent
    ],
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

    
    return [
      `f-tabs-nav__type_${type}`,
      `f-tabs-nav__type_${type}_${position}`
    ]
  })

  const scrollClassList = computed(() => {
    return {
      'f-tabs-nav__scroll_before': leftReachedRef.value,
      'f-tabs-nav__scroll_after': rightReachedRef.value
    }
  })
</script>

<template>
  <div class="f-tabs-nav" :class="classList">
    <div class="f-tabs-nav__prefix">
      <slot name="prefix"></slot>
    </div>
    <div class="f-tabs-nav__main" :class="scrollClassList">
      <div class="f-tabs-nav__scroll" @wheel.passive="handleWheel">
        <div class="f-tabs-nav__wrapper" :style="wrapperStyle">
          <div class="f-tabs-nav--item"
            :class="[{
              'f-tabs-nav--item__active': item.name === prop.currentName
            }]"
            v-for="item, i in prop.navs"
            :key="item.name"
            @click="clickNavItem(item.name)"
          >
            <span v-if="isString(item.label)">{{item.label}}</span>
            <div v-else>
              <component :is="item.label"></component>
            </div>
            <FSvgIcon :icon="FIconCrossVue" v-if="type === 'card' && editStatus" @click.stop="closeItem(item.name, i)"></FSvgIcon>
          </div>
          <div class="f-tabs-nav--line__active" :style="activeLineStyle"  v-if="prop.type === 'line'"></div>
        </div>
      </div>
    </div>
    <div class="f-tabs-nav__suffix">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>
