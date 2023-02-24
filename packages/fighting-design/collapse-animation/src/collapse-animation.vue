<script lang="ts" setup name="FCollapseAnimation">
  import { Props } from './props'
  import { computed } from 'vue'

  const prop = defineProps(Props)

  /**
   * 该组件 2023-02-24 重构一次
   * 
   * 以往版本实现可参考：
   * 
   * @see collapse-animation https://github.com/FightingDesign/fighting-design/tree/474f6f19c2b034d5f2839c110e02b8987af24a9a/packages/fighting-design/collapse-animation
   */

  /** 获取当前的展示状态 */
  const open: boolean = prop.opened

  /**
   * 初始是否展开
   *
   * 如果被禁用，则使用默认展示状态
   *
   * 否则使用响应式展示状态
   */
  const isOpened = computed((): boolean => {
    return prop.disabled ? open : prop.opened
  })

  /** 动画样式 */
  const transitionStyle = '0.3s height ease-in-out'

  /**
   * 在元素被插入到 DOM 之前被调用
   *
   * 用这个来设置元素的 "enter-from" 状态
   *
   * @param { Object } el 元素节点
   */
  const onBeforeEnter = (el: HTMLElement): void => {
    console.log('onBeforeEnter', el)
    el.style.transition = transitionStyle
    el.style.height = '0'
  }

  /**
   * 在元素被插入到 DOM 之后的下一帧被调用
   *
   * 用这个来开始进入动画
   *
   * @param { Object } el 元素节点
   */
  const onEnter = (el: HTMLElement): void => {
    console.log('onEnter', el.scrollHeight)
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`
    } else {
      el.style.height = ''
    }
    el.style.overflow = 'hidden'
  }

  /**
   * 当进入过渡完成时调用
   *
   * @param { Object } el 元素节点
   */
  const onAfterEnter = (el: HTMLElement): void => {
    el.style.transition = ''
    el.style.height = ''
    console.log('onAfterEnter', el)
  }

  /**
   * 在 leave 钩子之前调用
   *
   * 大多数时候，你应该只会用到 leave 钩子
   *
   * @param { Object } el 元素节点
   */
  const onBeforeLeave = (el: HTMLElement): void => {
    console.log('beforeLeave')
    el.style.height = `${el.scrollHeight}px`
  }

  const onLeave = (el: HTMLElement): void => {
    console.log('onLeave')
    if (el.scrollHeight !== 0) {
      el.style.transition = transitionStyle
      el.style.height = '0'
    }
  }

  const onAfterLeave = (el: HTMLElement): void => {
    console.log('onAfterLeave', el)
    el.style.transition = ''
    el.style.height = ''
  }
</script>

<template>
  <transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <div v-show="isOpened" class="f-collapse-animation">
      <slot />
    </div>
  </transition>
</template>
