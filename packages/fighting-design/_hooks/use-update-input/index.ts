import type {
  InputInterface,
  UseUpdateInputReturnInterface,
  UseUpdateInputInterface
} from './interface'

export const useUpdateInput: UseUpdateInputInterface = (
  emit: Function,
  change: Function | null
): UseUpdateInputReturnInterface => {

  /**
   * 处理文本框输入
   * @param evt input 事件对象
   */
  const input: InputInterface = (evt: Event): void => {
    emit('update:modelValue', (evt.target as HTMLInputElement).value)
    change && change((evt.target as HTMLInputElement).value)
  }

  return {
    input
  } as UseUpdateInputReturnInterface
}
