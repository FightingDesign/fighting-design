import type { ExtractPropTypes } from 'vue'
import type { CheckboxLabelType } from './interface'

export const Props = {
  modelValue: {
    type: Boolean,
    default: (): boolean => false
  },
  label: {
    type: String,
    default: (): string => ''
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  border: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export const Emits = {
  'update:modelValue': (val: CheckboxLabelType): boolean => {
    return typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean'
  }
} as const

export type CheckboxPropsType = ExtractPropTypes<typeof Props>
