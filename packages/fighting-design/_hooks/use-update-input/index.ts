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
   * 处理文本框输入
   * @param evt input 事件对象
   * @return { void }
   */
  const onInput: HandleEventInterface = (evt: Event): void => {
    emit('update:modelValue', (evt.target as HTMLInputElement).value)
    prop.onChange && prop.onChange((evt.target as HTMLInputElement).value)
  }

  /**
   * 清空文本框
   * @returns { void }
   */
  const onClear: OrdinaryFunctionInterface = (): void => {
    if (prop.disabled) return
    emit('update:modelValue', '')
  }

  return {
    onInput,
    onClear
  } as UseUpdateInputReturnInterface
}
