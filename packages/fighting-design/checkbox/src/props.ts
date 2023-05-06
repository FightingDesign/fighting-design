import { setBooleanProp, setFunctionProp } from '../../_utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { CheckboxChange, CheckboxModelValue, CheckboxLabel } from './interface'

export const Props = {
  /** 绑定值 */
  modelValue: {
    type: Boolean as PropType<CheckboxModelValue>,
    default: (): boolean => false
  },
  /** label 绑定值 */
  label: {
    type: [String, Number, Boolean] as PropType<CheckboxLabel>,
    default: (): null => null
  },
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 是否展示边框 */
  border: setBooleanProp(),
  /** 是否展示 label */
  showLabel: setBooleanProp(true),
  /** 绑定值发生改变时触发 */
  onChange: setFunctionProp<CheckboxChange>()
} as const

/** checkbox 组件 props 类型 */
export type CheckboxProps = ExtractPropTypes<typeof Props>
