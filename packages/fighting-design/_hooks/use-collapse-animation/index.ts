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
  before: (el: Element) => void
  ing: (el: Element) => void
  after: (el: Element) => void
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
   * 在动画开始之前，加点样式
   *
   * @param { Object } el 元素节点
   */
  const before = (el: Element): void => {
    const node = el as HTMLElement

    node.style.transition = transitionStyle.value

    if (prop.heightAnimation) {
      node.style.width = 'auto'
    }

    if (prop.widthAnimation) {
      node.style.height = 'auto'
    }

    /** 
     * 开启动画
     */
    if (prop.opened) {
      // node.style.height = '0'

      if (prop.heightAnimation) {
        node.style.height = '0'
      }

      if (prop.widthAnimation) {
        node.style.width = '0'
      }

      run(prop.onOpen, el)
    } else {
      node.style.height = node.scrollHeight + 'px'

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
  }

  /**
   * 运动过程中干点事儿
   *
   * @param { Object } el 元素节点
   */
  const ing = (el: Element): void => {
    const node = el as HTMLElement

    node.style.overflow = 'hidden'

    /**
     * 开启状态下的逻辑
     */
    if (prop.opened) {

      /**
       * 将元素的高度设置为元素内容高度的度量
       * 
       * @see Element.scrollHeight https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollHeight
       */
      if (prop.heightAnimation) {
        node.style.height = node.scrollHeight + 'px'
      } else {
        node.style.height = 'auto'
      }
      // debugger

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
    } else {
      /** 
       * 关闭状态下执行的逻辑
       */

      if (prop.heightAnimation) {
        node.style.height = '0'
      }

      if (prop.widthAnimation) {
        node.style.width = '0'
      }
    }
  }

  /**
   * 在打开和关闭完成之后，移除样式
   *
   * @param { Object } el 元素节点
   */
  const after = (el: Element): void => {
    const node = el as HTMLElement

    node.style.transition = ''
    node.style.height = ''
    node.style.width = ''

    if (prop.opened) {
      run(prop.onOpenEnd, el)
    } else {
      run(prop.onCloseEnd, el)
    }
  }

  return {
    after,
    before,
    ing
  }
}
