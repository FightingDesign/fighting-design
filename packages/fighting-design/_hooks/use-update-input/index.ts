import { isNumber } from '../../_utils'
import { useRun } from '../../_hooks'
import type { InputType } from '../../input'

/**
 * 传入的 props 类型接口
 *
 * @param disabled 是否禁用
 * @param onChange 绑定值改变时触发的回调
 */
export interface UseUpdateInputProps {
  onInput(val: string): void | null
  onChange(val: string): void | null
  disabled: boolean
  type?: InputType
}

/**
 * useUpdateInput hook 返回值类型接口
 *
 * @param onInput 处理文本框输入
 * @param onClear 清空文本框
 */
export interface UseUpdateInputReturn {
  onInput(evt: Event): void
  onChange(evt: Event): void
  onClear(): void
}

/**
 * 回调函数类型
 *
 * @param event 回调事件名
 * @param val 回调参数
 */
export interface UseUpdateInputEmit {
  (event: 'update:modelValue', val: string | number): void
}

/**
 * 文本框输入的方法
 *
 * 可处理文本框输入和清空
 *
 * @param prop 组件的 props 参数
 * @param emit 回调参数
 * @returns
 */
export const useUpdateInput = (prop: UseUpdateInputProps, emit: UseUpdateInputEmit): UseUpdateInputReturn => {
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

    useRun(prop.onInput, (evt.target as HTMLInputElement).value)
  }

  /**
   * 处理文本框输入 change 事件
   *
   * @param evt 事件对象
   */
  const onChange = (evt: Event): void => {
    useRun(prop.onChange, (evt.target as HTMLInputElement).value)
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
