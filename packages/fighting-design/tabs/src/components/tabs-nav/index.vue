<script lang="ts" setup name="FTabsNav">
  import { Props } from './props'
  import { isString, isBoolean } from '../../../../_utils'
  import { computed, ref, watch } from 'vue'
  import { FIconCrossVue, FIconPlusVue } from '../../../../_svg'
  import { FSvgIcon } from '../../../../svg-icon'
  import { useTabsNaStyle } from '../../../../_hooks'
  import type { ClassList } from '../../../../_interface'
  import type { TabsPaneName, TabsPosition, TabsJustifyContent, TabsType } from '../../interface'

  const prop = defineProps(Props)
  const emit = defineEmits<{
    (e: 'set-current-name', name: TabsPaneName): void
    (e: 'edit', action: 'remove' | 'add', name?: TabsPaneName, i?: number): void
  }>()

  const { setCardStyle, setActiveLineStyle, wrapperStyle, currentIndex, activeLineStyle } = useTabsNaStyle(prop)

  /**
   * 点击上方 nav 执行
   *
   * @param name 点击的 name
   */
  const clickNavItem = async (name: TabsPaneName): Promise<void> => {
    let res: boolean | void = true

    if (prop.onBeforeEnter) {
      res = await prop.onBeforeEnter(name)
    }

    if (isBoolean(res) && !res) return

    emit('set-current-name', name)
  }

  const editItem = (action: 'remove' | 'add', name?: TabsPaneName, index?: number): void => {
    emit('edit', action, name, index)
  }

  /** 左右侧的滚动阴影 */
  const leftReachedRef = ref<boolean>(false)
  const rightReachedRef = ref<boolean>(false)

  const deriveScrollShadow = (el: HTMLElement | null): void => {
    if (!el) return
    const { scrollLeft, scrollWidth, offsetWidth } = el

    leftReachedRef.value = scrollLeft > 0
    rightReachedRef.value = scrollLeft + offsetWidth < scrollWidth - 1 // -1 是因为计算有误差
  }

  /**
   * 滚轮事件
   *
   * 实现横向滚动效果
   *
   * @see WheelEvent https://developer.mozilla.org/zh-CN/docs/Web/API/WheelEvent
   */
  const handleWheel = (evt: WheelEvent): void => {
    (evt.currentTarget as HTMLElement).scrollLeft += evt.deltaY + evt.deltaX
    deriveScrollShadow(evt.currentTarget as HTMLElement)
  }

  /** 风格样式调整 */
  watch([currentIndex], (): void => {
    if (prop.type === 'line') {
      setActiveLineStyle()
    }
  })

  watch(
    [(): TabsPosition => prop.position, (): TabsType => prop.type, (): TabsJustifyContent => prop.justifyContent],
    (): void => {
      wrapperStyle.value = {}
      if (prop.type === 'card') {
        setCardStyle()
        if (prop.position === 'left' || prop.position === 'right') {
          leftReachedRef.value = false
          rightReachedRef.value = false
          return
        }
      }

      if (prop.type === 'line') {
        setActiveLineStyle()
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

  const classList = computed((): ClassList => {
    const { type, position } = prop
    return [`f-tabs-nav__type_${type}`, `f-tabs-nav__type_${type}_${position}`] as const
  })

  const scrollClassList = computed((): ClassList => {
    return [
      'f-tabs-nav__main',
      {
        'f-tabs-nav__scroll_before': leftReachedRef.value,
        'f-tabs-nav__scroll_after': rightReachedRef.value
      }
    ] as const
  })

  /** 事件处理 */
  const trigger = computed((): 'click' | 'mouseenter' => {
    return prop.trigger === 'hover' ? 'mouseenter' : 'click'
  })
</script>

<template>
  <div class="f-tabs-nav" :class="classList">
    <div v-if="$slots.prefix" class="f-tabs-nav__prefix">
      <slot name="prefix" />
    </div>

    <div :class="scrollClassList">
      <div class="f-tabs-nav__scroll" @wheel.passive="handleWheel">
        <div class="f-tabs-nav__wrapper" :style="wrapperStyle">
          <div
            v-for="(item, i) in navs"
            :key="item.name"
            :class="[
              'f-tabs-nav--item',
              {
                'f-tabs-nav--item__active': item.name === currentName
              }
            ]"
            @[trigger]="clickNavItem(item.name)"
          >
            <span v-if="isString(item.label)">{{ item.label }}</span>

            <div v-else>
              <component :is="item.label" />
            </div>

            <f-svg-icon
              v-if="type === 'card' && editStatus"
              class="f-tabs-nav--item__card_close"
              :icon="FIconCrossVue"
              @click.stop="editItem('remove', item.name, i)"
            />
          </div>

          <div v-if="type === 'card' && editStatus" class="f-tabs-nav--item" @click="editItem('add')">
            <f-svg-icon :icon="FIconPlusVue" color="#666" />
          </div>

          <div v-if="type === 'line'" class="f-tabs-nav--line__active" :style="activeLineStyle" />
        </div>
      </div>
    </div>

    <div v-if="$slots.suffix" class="f-tabs-nav__suffix">
      <slot name="suffix" />
    </div>
  </div>
</template>
