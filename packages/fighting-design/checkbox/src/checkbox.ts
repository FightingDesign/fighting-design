import type { ExtractPropTypes } from 'vue'

export type CheckboxLabelType = string | number | boolean

export const Props = {
  modelValue: {
    // type: [Number, String, Boolean],
    type: Boolean,
    default: false
  },
  label: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: (): string => 'middle'
  }
}

export const Emits = {
  'update:modelValue': (val: CheckboxLabelType): boolean => {
    return typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean'
  }
}

export type CheckboxProps = ExtractPropTypes<typeof Emits>
