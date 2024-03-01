import { computed } from 'vue'
import { isNumber } from '../../_utils'
import { useRun } from '..'
import type { CollapseAnimationProps } from '../../collapse-animation'

/**
 * useCollapseAnimation 返回值类型接口
 *
 * @param { Function } onBeforeEnter 在开启动画之前
 * @param { Function } onEnter 开启过渡前插入 DOM
 * @param { Function } onAfterEnter 开启过渡完成
 * @param { Function } onBeforeLeave 关闭动画之前
 * @param { Function } onLeave 关闭动画离开之前
 * @param { Function } onAfterLeave 关闭动画结束之后
 */
export interface UseCollapseAnimationReturn {
  onBeforeEnter: (el: Element) => void
  onEnter: (el: Element) => void
  onAfterEnter: (el: Element) => void
  onBeforeLeave: (el: Element) => void
  onLeave: (el: Element) => void
  onAfterLeave: (el: Element) => void
}

/**
 * 对于 Collapse Animation 折叠动画样式处理
 *
 * @param { Object } prop prop 参数

 */
export const useCollapseAnimation = (
  prop: CollapseAnimationProps
): UseCollapseAnimationReturn => {
  const { run } = useRun()

  /** 动画样式 */
  const transitionStyle = computed((): string => {
    if (isNumber(prop.animationTime)) {
      return `${prop.animationTime}s all ease-in-out`
    }
    return '0.747s all ease-in-out'
  })

  /**
   * 在开启动画之前
   *
   * 给元素设置动画样式和默认宽高
   *
   * @param { Object } el 元素节点
   */
  const onBeforeEnter = (el: Element): void => {
    const node = el as HTMLElement

    node.style.transition = transitionStyle.value

    if (prop.widthAnimation) {
      node.style.width = '0'
    }

    if (prop.heightAnimation) {
      node.style.height = '0'
    }

    run(prop.onOpen, el)
  }

  /**
   * 开启过渡前插入 DOM
   *
   * @param { Object } el 元素节点
   */
  const onEnter = (el: Element): void => {
    const node = el as HTMLElement

    node.style.overflow = 'hidden'

    /**
     * 将元素的高度设置为元素内容高度的度量
     *
     * @see Element.scrollHeight https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollHeight
     *
     * 如果需要高度过渡动画，则将高度设置为滚动高度，否则不做动画处理，设置 auto
     */
    if (prop.heightAnimation) {
      node.style.height = node.scrollHeight + 'px'
    } else {
      node.style.height = 'auto'
    }

    /**
     * 如果需要宽度过渡
     */
    if (prop.widthAnimation) {
      node.style.width = 'auto'

      /**
       * 获取到宽度
       *
       * @see Element.getBoundingClientRect() https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
       */
      const width: number = node.getBoundingClientRect().width

      node.style.width = '0'

      /**
       * offsetWidth 的访问行为会触发浏览器的重排
       *
       * @see HTMLElement.offsetWidth https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth
       */
      node.offsetWidth

      node.style.width = width + 'px'
    } else {
      node.style.width = 'auto'
    }
  }

  /**
   * 开启过渡完成
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
   * 关闭动画之前
   *
   * @param { Object } el 元素节点
   */
  const onBeforeLeave = (el: Element): void => {
    const node = el as HTMLElement

    node.style.transition = transitionStyle.value

    if (prop.heightAnimation) {
      node.style.height = node.scrollHeight + 'px'
    }

    if (prop.widthAnimation) {
      const width = node.getBoundingClientRect().width

      node.style.width = width + 'px'
    }

    run(prop.onClose, el)
  }

  /**
   * 关闭动画离开之前
   *
   * @param { Object } el 元素节点
   */
  const onLeave = (el: Element): void => {
    const node = el as HTMLElement

    node.style.overflow = 'hidden'

    if (prop.heightAnimation) {
      node.style.height = '0'
    }

    if (prop.widthAnimation) {
      node.style.width = '0'
    }
  }

  /**
   * 关闭动画结束之后
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

  return { onBeforeEnter, onEnter, onAfterEnter, onBeforeLeave, onLeave, onAfterLeave }
}
