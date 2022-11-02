import { isNumber, isString, isBoolean } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { RadioLabelType, RadioChangeInterface } from '../../radio-group/src/interface'

export const Props = {
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  modelValue: {
    type: [String, Number, Boolean] as PropType<RadioLabelType>,
    default: (): string => ''
  },
  name: {
    type: String,
    default: (): string => 'f-radio'
  },
  label: {
    type: [String, Number, Boolean] as PropType<RadioLabelType>,
    default: (): string => ''
  },
  change: {
    type: Function as PropType<RadioChangeInterface>,
    default: (): null => null
  }
} as const

export const Emits = {
  'update:modelValue': (val: RadioLabelType): boolean => {
    return isString(val) || isNumber(val) || isBoolean(val)
  }
} as const

export type RadioPropsType = ExtractPropTypes<typeof Props>