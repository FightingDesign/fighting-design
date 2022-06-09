import { switchSize } from '@fighting-design/fighting-type/switch'
import { PropType } from 'vue'

export const Props = {
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: false,
    require: true
  },
  size: {
    type: String as PropType<switchSize>,
    default: 'small',
    validator: (val: switchSize): boolean => {
      return (['large', 'middle', 'small'] as const).includes(val)
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  activeValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: true
  },
  inActiveValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: false
  },
  activeColor: String,
  inActiveColor: String,
  activeText: String,
  inActiveText: String
} as const

export const Emits = {
  'update:modelValue': (
    value: string | number | boolean
  ): string | number | boolean => value,
  change: (value: string | number | boolean): string | number | boolean => value
} as const
