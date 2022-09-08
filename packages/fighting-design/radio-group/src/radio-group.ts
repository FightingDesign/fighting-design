import { isNumber, isString, isBoolean } from '../../_utils'
import type { ExtractPropTypes, PropType, InjectionKey } from 'vue'

export const Props = {
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: (): string => ''
  },
  label: {
    type: String,
    default: (): string => ''
  },
  textColor: {
    type: String,
    default: (): string => ''
  }
} as const

export type RadioGroundProps = ExtractPropTypes<typeof Props>
export const radioGroupKey: InjectionKey<RadioGroundProps> =
  Symbol('radioGroupKey')

export const Emits = {
  'update:modelValue': (val: RadioGroundProps['modelValue']): boolean => {
    return isString(val) || isNumber(val) || isBoolean(val)
  },
  change: (val: RadioGroundProps['modelValue']): boolean => {
    return isString(val) || isNumber(val) || isBoolean(val)
  }
} as const
