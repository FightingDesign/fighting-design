import { isNumber, isString, isBoolean } from '../../_utils'
// import type { ExtractPropTypes } from 'vue'

export const Props = {
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: (): string => ''
  },
  name: {
    type: String,
    default: (): string => ''
  },
  label: {
    type: [String, Number, Boolean],
    default: (): string => ''
  }
}

export const Emits = {
  'update:modelValue': (val: string | number | boolean): boolean =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: string | number | boolean): boolean =>
    isString(val) || isNumber(val) || isBoolean(val)
} as const

// export type RadioProps = ExtractPropTypes<typeof Emits>
// export type RadioEmits = typeof Emits
// export type RadioInstance = InstanceType<typeof Radio>
