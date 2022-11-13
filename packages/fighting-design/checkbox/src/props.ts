import type { ExtractPropTypes, PropType } from 'vue'
import type { CheckboxLabelType } from './interface'

export const Props = {
  /**
   * 绑定值
   */
  modelValue: {
    type: [Boolean, Array] as PropType<boolean | []>,
    default: (): boolean => false
  },
  /**
   * label 绑定值
   */
  label: {
    type: String,
    default: (): string => ''
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否展示边框
   */
  border: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否展示 label
   */
  showLabel: {
    type: Boolean,
    default: (): boolean => true
  }
} as const

export const Emits = {
  'update:modelValue': (val: CheckboxLabelType | []): CheckboxLabelType | [] => val
} as const

export type CheckboxPropsType = ExtractPropTypes<typeof Props>
