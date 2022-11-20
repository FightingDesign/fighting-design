import { runCallback } from '../../_utils'
import type {
  UseUpdateInputInterface,
  UseUpdateInputEmitInterface,
  UseUpdateInputPropsInterface,
  UseUpdateInputReturnInterface,
  HandleEventInterface,
  OrdinaryFunctionInterface
} from './interface'

/**
 * 文本框输入的方法
 * 可处理文本框输入和清空
 *
 * @param prop 组件的 props 参数
 * @param emit 回调参数
 * @returns { UseUpdateInputInterface }
 */
export const useUpdateInput: UseUpdateInputInterface = (
  prop: UseUpdateInputPropsInterface,
  emit: UseUpdateInputEmitInterface
): UseUpdateInputReturnInterface => {

  /**
   * 处理文本框输入 input 事件
   *
   * @param evt 事件对象
   */
  const onInput: HandleEventInterface = (evt: Event): void => {
    emit('update:modelValue', (evt.target as HTMLInputElement).value)
    runCallback(prop.onInput, (evt.target as HTMLInputElement).value)
  }

  /**
   * 处理文本框输入 change 事件
   *
   * @param evt 事件对象
   */
  const onChange: HandleEventInterface = (evt: Event): void => {
    runCallback(prop.onChange, (evt.target as HTMLInputElement).value)
  }

  /**
   * 清空文本框
   */
  const onClear: OrdinaryFunctionInterface = (): void => {
    if (prop.disabled) return
    emit('update:modelValue', '')
  }

  return {
    onInput,
    onChange,
    onClear
  } as UseUpdateInputReturnInterface
}
