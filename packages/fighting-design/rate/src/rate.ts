import type { PropType, ExtractPropTypes } from 'vue'
import type { RateSizeType, RateType } from './interface'

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
  line: {
    type: Boolean,
    default: (): boolean => false
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
    type: String as PropType<RateSizeType>,
    default: 'default'
  },
  textShow: {
    type: String as PropType<RateSizeType>,
    default: 'default'
  },
  textColor: {
    type: String,
    default: ''
  },
  textArr: {
    type: Array as PropType<string[]>,
    default: ()=>([])
  },
  textSize: {
    type: String as PropType<RateSizeType>,
    default: 'default'
  },

} as const

export const Emits = {
  'close-end': (evt: Event): Event => evt
} as const

export type RatePropsType = ExtractPropTypes<typeof Props>
