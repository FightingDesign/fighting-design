<script lang="ts" setup>
  import { Props } from './props'
  import { computed } from 'vue'
  import { useRun } from '../../_hooks'
  import { isNumber } from '../../_utils'

  defineOptions({ name: 'FCollapseAnimation' })

  const prop = defineProps(Props)

  const { run } = useRun()

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
  const transitionStyle = computed((): string => {
    if (isNumber(prop.animationTime)) {
      return `${prop.animationTime}s all ease-in-out`
    }
    return '0.747s all ease-in-out'
  })

  /**
   * 打开动画开始的回调
   *
   * @param { Object } el 元素节点
   */
  const onBeforeEnter = (el: Element): void => {
    const node = el as HTMLElement

    node.style.transition = transitionStyle.value
    node.style.height = '0'
    node.style.width = 'auto'

    run(prop.onOpen, el)
  }

  /**
   * 在元素被插入到 DOM 之后的下一帧被调用
   *
   * 用这个来开始进入动画
   *
   * @param { Object } el 元素节点
   */
  const onEnter = (el: Element): void => {
    const node = el as HTMLElement

    if (node.scrollHeight !== 0) {
      node.style.height = `${node.scrollHeight}px`
    } else {
      node.style.height = ''
    }

    /** 如果需要宽度过度 */
    if (prop.widthAnimation) {
      node.style.width = '0'

      /** 获取父节点 */
      const parent = node.parentElement as HTMLElement
      /**
       * 获取父节点的宽度
       *
       * @see HTMLElement.offsetWidth https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth
       * @see Element.clientWidth https://developer.mozilla.org/zh-CN/docs/Web/API/Element/clientWidth
       */
      const parentWidth: number = parent.offsetWidth || parent.clientWidth

      /** 如果两个方法都没有获取到宽度，使用 auto */
      node.style.width = isNumber(parentWidth) ? `${parentWidth}px` : 'auto'
    }

    node.style.overflow = 'hidden'
  }

  /**
   * 打开动画结束的回调
   *
   * @param { Object } el 元素节点
   */
  const onAfterEnter = (el: Element): void => {
    const node = el as HTMLElement

    node.style.transition = ''
    node.style.height = ''
    node.style.width = ''

    run(prop.onOpenEnd, el)
  }

  /**
   * 关闭动画开始的回调
   *
   * @param { Object } el 元素节点
   */
  const onBeforeLeave = (el: Element): void => {
    const node = el as HTMLElement

    node.style.height = `${node.scrollHeight}px`

    if (prop.widthAnimation) {
      /** 获取父节点 */
      const parent = node.parentElement as HTMLElement
      /**
       * 获取父节点的宽度
       *
       * @see HTMLElement.offsetWidth https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth
       * @see Element.clientWidth https://developer.mozilla.org/zh-CN/docs/Web/API/Element/clientWidth
       */
      const parentWidth: number = parent.offsetWidth || parent.clientWidth

      node.style.width = `${parentWidth}px`
    }

    run(prop.onClose, el)
  }

  /**
   * 在离开过渡开始时调用
   *
   * 用这个来开始离开动画
   *
   * @param { Object } el 元素节点
   */
  const onLeave = (el: Element): void => {
    const node = el as HTMLElement

    if (node.scrollHeight !== 0) {
      node.style.transition = transitionStyle.value
      node.style.height = '0'
    }

    if (prop.widthAnimation) {
      node.style.transition = transitionStyle.value
      node.style.width = '0'
    }
  }

  /**
   * 关闭动画结束的回调
   *
   * @param { Object } el 元素节点
   */
  const onAfterLeave = (el: Element): void => {
    const node = el as HTMLElement

    node.style.transition = ''
    node.style.height = ''
    node.style.width = ''

    run(prop.onCloseEnd, el)
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
