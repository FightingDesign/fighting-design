import { watch, ref } from 'vue'
import { useRun } from '..'
import type { Ref } from 'vue'
import type { UseVisibleReturn, UseVisibleEmit } from './interface'

export * from './interface.d'

/**
 * 控制 dialog 和 drawer 组件显示隐藏方法
 * 
 * @param visible 显示状态
 * @param emit 回调
 */
export const useVisible = (visible: Ref<boolean>, emit: UseVisibleEmit, callback?: Function): UseVisibleReturn => {

  /** 是否展示 */
  const isVisible = ref<boolean>(visible.value)

  /** 
   * 关闭
   * 
   * @param evt 事件对象
   */
  const closeVisible = (evt?: MouseEvent): void => {
    emit('update:visible', false)
    useRun(callback, evt)
  }

  /** 监视绑定值的变化，如果为假则关闭 */
  watch(
    (): boolean => isVisible.value,
    (newVal: boolean): void => {
      if (!newVal) {
        closeVisible()
      }
    }
  )

  /** 监视数据更新绑定值 */
  watch(
    (): boolean => visible.value,
    (newVal: boolean): void => {
      isVisible.value = newVal
    }
  )

  return {
    isVisible,
    closeVisible
  }
}
