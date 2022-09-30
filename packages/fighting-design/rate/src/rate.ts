import type { PropType, ExtractPropTypes } from 'vue'
import type { RateType } from './interface'

export const Props = {
  type: {
    type: String as PropType<RateType>,
    default: (): RateType => 'default',
    validator: (val: RateType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
    }
  },
  effectColor: {
    type: String,
    default: ''
  },
  invalidColor: {
    type: String,
    default: ''
  },
  readonly: {
    type: Boolean,
    default: false
  },
  max: {
    type: Number,
    default: 5
  },
  half: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  doubleClear: {
    type: Boolean,
    default: false
  },
  size: {
    type: [String, Number] as PropType<string | number>,
    default: 'default'
  },
  textShow: {
    type: Boolean,
    default: false
  },
  textColor: {
    type: String,
    default: ''
  },
  textArr: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  textSize: {
    type: [String, Number] as PropType<string | number>,
    default: 'default'
  },
  modelValue: {
    type: Number,
    default: 0
  }
} as const

export const Emits = {
  change: (val: number) => val,
  'update:modelValue': (val: number) => val
} as const

export type RatePropsType = ExtractPropTypes<typeof Props>
