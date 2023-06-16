import { computed } from 'vue'
import { isNumber } from '../../_utils'
import { useRun } from '..'
import type { CollapseAnimationProps } from '../../collapse-animation'

export interface UseCollapseAnimationReturn {
  after: (el: Element) => void
  before: (el: Element) => void
  ing: (el: Element) => void
}

const { run } = useRun()

export const useCollapseAnimation = (prop: CollapseAnimationProps): UseCollapseAnimationReturn => {
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
    node.style.width = 'auto'

    if (prop.opened) {
      node.style.height = '0'

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

  /**
   * 运动过程中干点事儿
   * 
   * @param { Object } el 元素节点
   */
  const ing = (el: Element): void => {
    const node = el as HTMLElement

    node.style.overflow = 'hidden'

    if (prop.opened) {
      /** 开启执行 */
      node.style.height = node.scrollHeight + 'px'

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
      /** 关闭执行 */
      node.style.height = '0'

      if (prop.widthAnimation) {
        node.style.width = '0'
      }
    }
  }

  return {
    after,
    before,
    ing
  }
}
