import { switchSize } from '@fighting-design/fighting-type'
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
  inActiveValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: (): boolean => false
  },
  activeColor: {
    type: String,
    default: (): string => ''
  },
  inActiveColor: {
    type: String,
    default: (): string => ''
  },
  activeText: {
    type: String,
    default: (): string => ''
  },
  inActiveText: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  'update:modelValue': (
    value: string | number | boolean
  ): string | number | boolean => value,
  change: (value: string | number | boolean): string | number | boolean => value
} as const
