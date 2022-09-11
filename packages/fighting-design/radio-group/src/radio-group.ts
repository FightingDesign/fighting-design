import { isNumber, isString, isBoolean } from '../../_utils'
import type { ExtractPropTypes, PropType, InjectionKey } from 'vue'
import type { labelType, radioGroupSize } from './interface'

export const Props = {
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  modelValue: {
    type: [String, Number, Boolean] as PropType<labelType>,
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
  },
  size: {
    type: String as PropType<radioGroupSize>,
    default: (): radioGroupSize => 'middle',
    validator: (val: radioGroupSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  circle: {
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
