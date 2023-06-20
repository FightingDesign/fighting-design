import { useRun } from '..'
import type { Ref } from 'vue'

/**
 * useVisible 返回值类型接口
 *
 * @param { Function } closeVisible 关闭方法
 * @param { Function } maskClose 遮罩层关闭方法
 */
export interface UseVisibleReturn {
  closeVisible: () => void
  maskClose: () => void
}

/**
 * 控制 dialog 和 drawer 组件显示隐藏方法
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { boolean } visible 显示状态
 * @param { Function } emit 回调
 * @param { Function } [callback] 回调方法
 * @returns { Object }
 */
export const useVisible = (
  prop: { maskClose: boolean },
  visible: Ref<boolean>,
  callback?: Function
): UseVisibleReturn => {
  const { run } = useRun()

  /**
   * 关闭
   *
   * @param { Object } [evt] 事件对象
   */
  const closeVisible = (evt?: MouseEvent): void => {
    visible.value = false
    run(callback, evt)
  }

  /** 点击遮罩层关闭 */
  const maskClose = (): void => {
    if (!prop.maskClose) return
    closeVisible()
  }

  return { closeVisible, maskClose }
}
