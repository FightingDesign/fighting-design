import { isNumber, isString, isBoolean } from '../../_utils'
import type { ExtractPropTypes, PropType, InjectionKey } from 'vue'
import type { labelType } from './interface'

export const Props = {
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  modelValue: {
    type: [String, Number, Boolean] as PropType<labelType>,
    default: (): string => ''
  },
  label: {
    type: String,
    default: (): string => ''
  },
  vertical: {
    type: Boolean,
    default: (): boolean => false
  },
  columnGap: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  rowGap: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  border: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

type RadioGroundProps = ExtractPropTypes<typeof Props>

export const RadioGroupPropsKey = Symbol('') as InjectionKey<RadioGroundProps>

export const Emits = {
  'update:modelValue': (val: labelType): boolean => {
    return isString(val) || isNumber(val) || isBoolean(val)
  },
  change: (val: labelType): boolean => {
    return isString(val) || isNumber(val) || isBoolean(val)
  }
} as const
