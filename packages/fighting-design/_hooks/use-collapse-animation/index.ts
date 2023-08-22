import { computed } from 'vue'
import { isNumber } from '../../_utils'
import { useRun } from '..'
import type { CollapseAnimationProps } from '../../collapse-animation'

/**
 * useCollapseAnimation 返回值类型接口
 * 
 * @param { Function } before 动画开始之前 
 * @param { Function } ing 动画进行中
 * @param { Function } after 动画结束
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
 * @param prop prop 参数
 * @returns 
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
    node.style.height = '0'
    node.style.width = '0'
  }

  /**
   * 开启过度前插入 DOM
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
     * 如果需要高度过度动画，则将高度设置为滚动高度，否则不做动画处理，设置 auto
     */
    if (prop.heightAnimation) {
      node.style.height = node.scrollHeight + 'px'
    } else {
      node.style.height = 'auto'
    }

    /** 
     * 如果需要宽度过度
     */
    if (prop.widthAnimation) {
      const parent = node.parentElement as HTMLElement

      /**
       * 获取父节点的宽度
       *
       * @see HTMLElement.offsetWidth https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth
       * @see Element.clientWidth https://developer.mozilla.org/zh-CN/docs/Web/API/Element/clientWidth
       */
      const parentWidth: number = parent.offsetWidth || parent.clientWidth

      /** 如果两个方法都没有获取到宽度，使用 auto */
      node.style.width = isNumber(parentWidth) ? parentWidth + 'px' : 'auto'
    } else {
      node.style.width = 'auto'
    }
  }

  /**
   * 开启过度完整
   * 
   * @param { Object } el 元素节点
   */
  const onAfterEnter = (el: Element): void => {
    const node = el as HTMLElement

    node.style.transition = ''
    node.style.height = ''
    node.style.width = ''
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
      /** 获取父节点 */
      const parent = node.parentElement as HTMLElement
      /**
       * 获取父节点的宽度
       *
       * @see HTMLElement.offsetWidth https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth
       * @see Element.clientWidth https://developer.mozilla.org/zh-CN/docs/Web/API/Element/clientWidth
       */
      const parentWidth: number = parent.offsetWidth || parent.clientWidth

      node.style.width = parentWidth + 'px'
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
  }

  return { onBeforeEnter, onEnter, onAfterEnter, onBeforeLeave, onLeave, onAfterLeave }
}
