<script lang="ts" setup>
  import { Props } from './props'
  import { computed } from 'vue'

  defineOptions({ name: 'FCollapseAnimation' })

  const prop = defineProps(Props)

  /**
   * 该组件 2023-02-24 重构一次
   *
   * 以往版本实现可参考：
   *
   * @see collapse-animation https://github.com/FightingDesign/fighting-design/tree/474f6f19c2b034d5f2839c110e02b8987af24a9a/packages/fighting-design/collapse-animation
   *
   * 新版本使用 Transition 来实现
   *
   * @see javascript-hooks https://cn.vuejs.org/guide/built-ins/transition.html#javascript-hooks
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
  const onBeforeEnter = (el: Element): void => {
    ;(el as HTMLElement).style.transition = transitionStyle
    ;(el as HTMLElement).style.height = '0'
  }

  /**
   * 在元素被插入到 DOM 之后的下一帧被调用
   *
   * 用这个来开始进入动画
   *
   * @param { Object } el 元素节点
   */
  const onEnter = (el: Element): void => {
    if ((el as HTMLElement).scrollHeight !== 0) {
      ;(el as HTMLElement).style.height = `${(el as HTMLElement).scrollHeight}px`
    } else {
      ;(el as HTMLElement).style.height = ''
    }
    ;(el as HTMLElement).style.overflow = 'hidden'
  }

  /**
   * 当进入过渡完成时调用
   *
   * @param { Object } el 元素节点
   */
  const onAfterEnter = (el: Element): void => {
    ;(el as HTMLElement).style.transition = ''
    ;(el as HTMLElement).style.height = ''
  }

  /**
   * 在 leave 钩子之前调用
   *
   * 大多数时候，你应该只会用到 leave 钩子
   *
   * @param { Object } el 元素节点
   */
  const onBeforeLeave = (el: Element): void => {
    ;(el as HTMLElement).style.height = `${(el as HTMLElement).scrollHeight}px`
  }

  /**
   * 在离开过渡开始时调用
   *
   * 用这个来开始离开动画
   *
   * @param { Object } el 元素节点
   */
  const onLeave = (el: Element): void => {
    if ((el as HTMLElement).scrollHeight !== 0) {
      ;(el as HTMLElement).style.transition = transitionStyle
      ;(el as HTMLElement).style.height = '0'
    }
  }

  /**
   * 在离开过渡完成
   *
   * 且元素已从 DOM 中移除时调用
   *
   * @param { Object } el 元素节点
   */
  const onAfterLeave = (el: Element): void => {
    ;(el as HTMLElement).style.transition = ''
    ;(el as HTMLElement).style.height = ''
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
