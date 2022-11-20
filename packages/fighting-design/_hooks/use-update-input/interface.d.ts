import type {
  OrdinaryFunctionInterface,
  HandleEventInterface
} from '../../_interface'
import type { TextareaChangeInterface } from '../../textarea/src/interface'

export type {
  OrdinaryFunctionInterface,
  HandleEventInterface
} from '../../_interface'

/**
 * 传入的 props 类型接口
 *
 * @param disabled 是否禁用
 * @param onChange 绑定值改变时触发的回调
 */
export interface UseUpdateInputPropsInterface {
  onInput: TextareaChangeInterface | null
  onChange: TextareaChangeInterface | null
  disabled: boolean
}

/**
 * useUpdateInput 类型接口
 *
 * @param prop 件的 props 参数
 * @param emit 回调参数
 * @return { UseUpdateInputReturnInterface }
 */
export interface UseUpdateInputInterface {
  (
    prop: UseUpdateInputPropsInterface,
    emit: UseUpdateInputEmitInterface
  ): UseUpdateInputReturnInterface
}

/**
 * useUpdateInput hook 返回值类型接口
 *
 * @param onInput 处理文本框输入
 * @param onClear 清空文本框
 */
export interface UseUpdateInputReturnInterface {
  onInput: HandleEventInterface
  onChange: HandleEventInterface
  onClear: OrdinaryFunctionInterface
}

/**
 * 回调函数类型
 * 
 * @param event 回调事件名
 * @param val 回调参数
 */
export interface UseUpdateInputEmitInterface {
  (event: 'update:modelValue', val: string): void
}
