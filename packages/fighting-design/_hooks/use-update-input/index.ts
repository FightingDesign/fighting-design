import type {
  InputInterface,
  UseUpdateInputReturnInterface,
  UseUpdateInputInterface,
  OrdinaryFunctionInterface,
  UseUpdateInputPropsInterface
} from './interface'

export const useUpdateInput: UseUpdateInputInterface = (
  emit: Function,
  prop: UseUpdateInputPropsInterface
): UseUpdateInputReturnInterface => {

  /**
   * 处理文本框输入
   * @param evt input 事件对象
   * @return { void }
   */
  const input: InputInterface = (evt: Event): void => {
    emit('update:modelValue', (evt.target as HTMLInputElement).value)
    prop.onChange && prop.onChange((evt.target as HTMLInputElement).value)
  }

  /**
   * 清空文本框
   * @returns { void }
   */
  const clear: OrdinaryFunctionInterface = (): void => {
    if (prop.disabled) return
    emit('update:modelValue', '')
  }

  return {
    input,
    clear
  } as UseUpdateInputReturnInterface
}
