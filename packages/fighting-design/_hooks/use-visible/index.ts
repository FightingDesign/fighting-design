import { watch, ref } from 'vue'
import { useRun } from '..'
import { EMIT_VISIBLE } from '../../_tokens'
import type { Ref } from 'vue'
import type { UseVisibleReturn, UseVisibleEmit } from './interface'

export * from './interface.d'

/**
 * 控制 dialog 和 drawer 组件显示隐藏方法
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { boolean } visible 显示状态
 * @param { Function } emit 回调
 * @param { Function } [callback] 回调方法
 * @returns { Object }
 */
export const useVisible = (visible: Ref<boolean>, emit: UseVisibleEmit, callback?: Function): UseVisibleReturn => {
  const { run } = useRun()

  /** 是否展示 */
  const isVisible = ref<boolean>(visible.value)

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
    (): boolean => visible.value,
    /**
     * @param { boolean } newVal 最新值
     */
    (newVal: boolean): void => {
      isVisible.value = newVal
    }
  )

  return {
    isVisible,
    closeVisible
  }
}
