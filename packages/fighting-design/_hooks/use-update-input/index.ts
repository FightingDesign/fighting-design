import { runCallback, isNumber } from '../../_utils'
import type {
  UseUpdateInputEmitInterface,
  UseUpdateInputPropsInterface,
  UseUpdateInputReturnInterface
} from './interface'

/**
 * 文本框输入的方法
 *
 * 可处理文本框输入和清空
 *
 * @param prop 组件的 props 参数
 * @param emit 回调参数
 * @returns
 */
export const useUpdateInput = (
  prop: UseUpdateInputPropsInterface,
  emit: UseUpdateInputEmitInterface
): UseUpdateInputReturnInterface => {
  /**
   * 处理文本框输入 input 事件
   *
   * @param evt 事件对象
   */
  const onInput = (evt: Event): void => {
    emit(
      'update:modelValue',
      isNumber(prop.type)
        ? Number((evt.target as HTMLInputElement).value)
        : (evt.target as HTMLInputElement).value
    )

    runCallback(prop.onInput, (evt.target as HTMLInputElement).value)
  }

  /**
   * 处理文本框输入 change 事件
   *
   * @param evt 事件对象
   */
  const onChange = (evt: Event): void => {
    runCallback(prop.onChange, (evt.target as HTMLInputElement).value)
  }

  /**
   * 清空文本框
   */
  const onClear = (): void => {
    if (prop.disabled) return
    emit('update:modelValue', isNumber(prop.type) ? 0 : '')
  }

  return {
    onInput,
    onChange,
    onClear
  }
}
