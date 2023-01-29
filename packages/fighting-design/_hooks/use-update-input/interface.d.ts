import type { InputType } from '../../input'

/**
 * 传入的 props 类型接口
 *
 * @param { Function } onInput 处理文本框输入
 * @param { Function } onChange 改变后触发的回调
 * @param { boolean } disabled 是否禁用
 * @param { string } [type] 文本框类型
 */
export interface UseUpdateInputProps {
  onInput: (val: string) => void | null
  onChange: (val: string) => void | null
  disabled: boolean
  type?: InputType
}

/**
 * useUpdateInput hook 返回值类型接口
 *
 * @param { Function } onInput 处理文本框输入
 * @param { Function } onChange 改变后触发的回调
 * @param { Function } onClear 清空文本框
 */
export interface UseUpdateInputReturn {
  onInput: (evt: Event) => void
  onChange: (evt: Event) => void
  onClear: () => void
}

/**
 * 回调函数类型
 *
 * @param { string } event 回调事件名
 * @param { boolean } val 回调参数
 */
export type UseUpdateInputEmit = (event: 'update:modelValue', val: string | number) => void
