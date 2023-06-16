import { watch, ref } from 'vue'
import { useRun } from '..'
import { EMIT_VISIBLE } from '../../_tokens'
import type { Ref } from 'vue'

/**
 * useVisible 返回值类型接口
 *
 * @param { Object } isVisible 展示状态
 * @param { Function } closeVisible 关闭方法
 */
export interface UseVisibleReturn {
  isVisible: Ref<boolean>
  closeVisible: () => void
  maskClose: () => void
}

/**
 * 回调函数类型
 *
 * @param { String } event 回调事件名
 * @param { Boolean } val 回调参数
 */
export type UseVisibleEmit = (event: 'update:visible', val: boolean) => void

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
  prop: { visible: boolean, maskClose: boolean },
  emit: UseVisibleEmit,
  callback?: Function
): UseVisibleReturn => {
  const { run } = useRun()

  /** 是否展示 */
  const isVisible = ref<boolean>(prop.visible)

  /**
   * 关闭
   *
   * @param { Object } [evt] 事件对象
   */
  const closeVisible = (evt?: MouseEvent): void => {
    emit(EMIT_VISIBLE, false)
    run(callback, evt)
  }

  /** 监视绑定值的变化，如果为假则关闭 */
  watch(
    (): boolean => isVisible.value,
    /**
     * @param { boolean } newVal 最新值
     */
    (newVal: boolean): void => {
      if (!newVal) {
        closeVisible()
      }
    }
  )

  /** 监视数据更新绑定值 */
  watch(
    (): boolean => prop.visible,
    /**
     * @param { boolean } newVal 最新值
     */
    (newVal: boolean): void => {
      isVisible.value = newVal
    }
  )

  /** 点击遮罩层关闭 */
  const maskClose = (): void => {
    if (!prop.maskClose) return
    closeVisible()
  }

  return {
    isVisible,
    closeVisible,
    maskClose
  }
}
