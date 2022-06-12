import { switchSize } from './interface'
import { PropType } from 'vue'

export const Props = {
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: (): boolean => false,
    require: true
  },
  size: {
    type: String as PropType<switchSize>,
    default: (): switchSize => 'small',
    validator: (val: switchSize): boolean => {
      return (['large', 'middle', 'small'] as const).includes(val)
    }
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  activeValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: (): boolean => true
  },
  inactiveValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: (): boolean => false
  },
  activeColor: {
    type: String,
    default: (): string => ''
  },
  inactiveColor: {
    type: String,
    default: (): string => ''
  },
  activeText: {
    type: String,
    default: (): string => ''
  },
  inactiveText: {
    type: String,
    default: (): string => ''
  },
  icon: {
    type: String,
    default: (): string => ''
  },
  square: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export const Emits = {
  'update:modelValue': (
    value: string | number | boolean
  ): string | number | boolean => value,
  change: (value: string | number | boolean): string | number | boolean => value
} as const
