<script lang="ts" setup name="FTabsNav">
  import { Emits, Props } from './props'
  import type { TabsNavPropsType } from './interface'
  import { isString } from '../../../../_utils'
import { TabsPaneName } from '../../interface';
import { ComponentInternalInstance, computed, CSSProperties, getCurrentInstance, nextTick, ref, watch } from 'vue';

  const prop: TabsNavPropsType = defineProps(Props)

  const emit = defineEmits(Emits)

  const currentIndex = computed(() => Math.max(prop.navs.findIndex(e => e.name === prop.currentName), 0))

  const instance:ComponentInternalInstance = getCurrentInstance()

  function clickNavItem(name: TabsPaneName, index: number) {
    let res:boolean | void = true
    if (prop.beforeEnter) {
      res = prop.beforeEnter(name)
    }
    if (typeof res === 'boolean' && !res) return
  
    emit('set-current-name', name)
  }
  /**
   * 仅针对card模式下的，items的样式
   * 
   * 主要用于items的高度或宽度固定，防止在切换时抖动
   */
  const wrapperStyle = ref<CSSProperties>({})
  async function updateWrapperStyle() {
    await nextTick()
    if (!prop.navs.length) return
    const wrapperEl = instance.subTree.el.querySelector('.f-tabs-nav--items') as HTMLElement

    if (prop.position === 'left' || prop.position === 'right') {
      if (wrapperStyle.value.width) return
      wrapperStyle.value = {width: wrapperEl.offsetWidth + 8 + 'px'}
    } else {
      if (wrapperStyle.value.height) return
      wrapperStyle.value = {height: wrapperEl.offsetHeight + 12 + 'px'}
    }
  }


  /**
   * 仅针对line模式下的，活动线条的样式
   */
  const activeLineStyle = ref<CSSProperties>({})
  const lineStyle = ref<CSSProperties>({})

  async function updateActiveLineStyle() {
    await nextTick()
    const { position } = prop
    const activeStyle:CSSProperties = {}
    const children = instance.subTree.el.querySelectorAll('.f-tabs-nav--item') as HTMLElement[]
    
    if (!children.length) return
    const nextItem = children[currentIndex.value]

    const parent = nextItem.parentElement
    const nextItemStyle = window.getComputedStyle(nextItem)
    if (position === 'top' || position === 'bottom') {
      activeStyle.width = nextItem.clientWidth - Number.parseFloat(nextItemStyle.paddingLeft) - Number.parseFloat(nextItemStyle.paddingRight) + 'px'
      activeStyle.transform = `translateX(${nextItem.offsetLeft - parent.offsetLeft + Number.parseFloat(nextItemStyle.paddingLeft)}px)`
      lineStyle.value = {}
    } else {
      activeStyle.height = nextItem.clientHeight - Number.parseFloat(nextItemStyle.paddingTop) - Number.parseFloat(nextItemStyle.paddingBottom) + 'px'
      activeStyle.transform = `translateY(${nextItem.offsetTop - parent.offsetTop + Number.parseFloat(nextItemStyle.paddingTop)}px)`
    
      const wrapperEl = instance.subTree.el.querySelector('.f-tabs-nav__wrapper')
      lineStyle.value.height = wrapperEl.scrollHeight + 'px'
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
  watch(
    [
      currentIndex,
      () => prop.position,
      () => prop.type, 
      () => prop.justifyContent
    ],
    () => {
      if (prop.type === 'card') {
        updateWrapperStyle()
      } else {
        wrapperStyle.value = {}
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
      `f-tabs-nav__type_${type}_${position}`,
      {
        'f-tabs-nav__scroll_before': leftReachedRef.value,
        'f-tabs-nav__scroll_after': rightReachedRef.value
      }
    ]
  })
</script>

<template>
  <div class="f-tabs-nav" :class="classList">
    <slot name="prefix"></slot>
    <div class="f-tabs-nav__scroll" @wheel.passive="handleWheel">
      <div class="f-tabs-nav__wrapper">
        <div class="f-tabs-nav--items" :style="wrapperStyle">
          <div class="f-tabs-nav--item"
            :class="[{
              'f-tabs-nav--item__active': item.name === prop.currentName
            }]"
            v-for="item, i in prop.navs"
            :key="item.name"
            @click="clickNavItem(item.name, i)"
          >
            <span v-if="isString(item.label)">{{item.label}}</span>
            <component :is="item.label" v-else></component>
          </div>
        </div>
        <template  v-if="prop.type === 'line'">
          <div class="f-tabs-nav--line" :style="lineStyle">
            <div class="f-tabs-nav--line__active" :style="activeLineStyle"></div>
          </div>
        </template>
      </div>
    </div>
    <slot name="suffix"></slot>
  </div>
</template>
