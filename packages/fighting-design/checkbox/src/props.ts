import { setBooleanProp } from '../../_utils'
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
  showLabel: {
    type: Boolean,
    default: (): boolean => true
  },
  /** 是否为半选状态 */
  indeterminate: setBooleanProp(),
  /** 绑定值发生改变时触发 */
  onChange: {
    type: Function as PropType<CheckboxChange>,
    default: (): null => null
  }
} as const

export type CheckboxProps = ExtractPropTypes<typeof Props>
