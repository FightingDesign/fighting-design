import type { OrdinaryFunctionInterface } from '../../_interface'
import type { TextareaChangeInterface } from '../../textarea/src/interface'

export type { OrdinaryFunctionInterface } from '../../_interface'

/**
 * input 方法类型接口
 * 
 * evt 传入事件对象，无返回值
 */
export interface InputInterface {
  (evt: Event): void
}

/**
 * 传入的 props 类型接口
 * 
 * disabled 是否禁用
 * 
 * onChange 绑定值改变时触发的回调
 */
export interface UseUpdateInputPropsInterface {
  disabled?: boolean
  onChange?: TextareaChangeInterface | null
}

/**
 * useUpdateInput 类型接口
 * 
 * prop 件的 props 参数
 * 
 * emit 回调参数
 * 
 */
export interface UseUpdateInputInterface {
  (prop: UseUpdateInputPropsInterface, emit: Function): UseUpdateInputReturnInterface
}

/**
 * useUpdateInput hook 返回值类型接口
 * 
 * onInput 处理文本框输入
 * 
 * onClear清空文本框
 */
export interface UseUpdateInputReturnInterface {
  onInput: InputInterface
  onClear: OrdinaryFunctionInterface
}
