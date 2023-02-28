import { ref, onMounted, onUnmounted } from 'vue'
import { EMIT_UPDATE } from '../../_tokens'
import type { Ref } from 'vue'
import type { UseOffsetReturn } from './interface'

export * from './interface.d'

/**
 * slider 组件偏移量相关操作
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } el 小球元素节点
 * @param { Object } step 步长
 * @param { Function } emit 回调方法
 * @returns { Object } 包括：偏移距离、距离左侧的偏移量、设置偏移量方法
 */
export const useOffset = (
  el: Ref<HTMLDivElement | undefined>,
  step: Ref<number>,
  emit: (event: 'update:modelValue', val: number) => void
): UseOffsetReturn => {
  /** 距离左侧的偏移量 */
  const offsetLeft = ref<number>(0)

  /**
   * 获取当前节点距离左侧的偏移量
   *
   * @see HTMLElement.offsetParent https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetParent
   * @see HTMLElement.offsetLeft https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetLeft
   * @param { Object } el 元素节点
   * @returns { number } 偏移距离
   */
  const getElementOffset = (el: HTMLDivElement): number => {
    /** 当前元素左边距 */
    let left: number = el.offsetLeft
    /** 当前元素的父级元素 */
    let parent: Element | null = el.offsetParent

    while (parent !== null) {
      /** 累加左边距 */
      left += (parent as HTMLElement).offsetLeft
      /** 依次获取父元素 */
      parent = (parent as HTMLElement).offsetParent
    }

    return left
  }

  /**
   * 当浏览器窗口尺寸发生变化的时候，更新距离左侧的距离
   */
  const windowResize = (): void => {
    if (el.value) {
      offsetLeft.value = getElementOffset(el.value)
    }
  }

  /**
   * 在组件挂载完成后，先设置当前元素距离左侧的距离
   *
   * window 上注册 resize 事件
   *
   * 监视窗口发生变化时候重新触发更新
   *
   * @see resize https://developer.mozilla.org/zh-CN/docs/Web/API/Window/resize_event
   */
  onMounted((): void => {
    windowResize()
    window && window.addEventListener('resize', windowResize)
  })

  /**
   * 组件实例被卸载之后调用
   *
   * window 移除 resize 事件
   */
  onUnmounted((): void => {
    window && window.removeEventListener('resize', windowResize)
  })

  /** 偏移距离 */
  const offset = ref<number>(0)

  /**
   * 设置偏移量
   *
   * @param { number } dot 最新值
   */
  const setPosition = (dot: number): void => {
    if (dot < 0) {
      dot = 0
    } else if (dot > 100) {
      dot = 100
    }

    /**
     * 当前长度 / 步长 = 当前走了多少步
     *
     * 并四舍五入获得整数
     *
     * @see Math.round() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round
     */
    const steps: number = Math.round(dot / step.value)

    /** 单步的步长 * 当前步数 = 当前走的百分比 */
    const value: number = steps * step.value

    offset.value = value

    emit(EMIT_UPDATE, value)
  }

  return { offset, offsetLeft, setPosition }
}
