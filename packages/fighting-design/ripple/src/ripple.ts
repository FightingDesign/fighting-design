import type { PropType, ExtractPropTypes } from 'vue'
import type { RippleType, RippleOpacityType } from './interface'

export const Props = {
  ripplesColor: {
    type: String,
    default: (): string => ''
  },
  duration: {
    type: Number,
    default: (): number => 400,
    validator: (val: number): boolean => val > 0
  },
  type: {
    type: String as PropType<RippleType>,
    default: (): RippleType => 'default',
    validator: (val: RippleType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
    }
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  startOpacity: {
    type: Number as PropType<RippleOpacityType>,
    default: (): RippleOpacityType => 0.5,
    validator: (val: RippleOpacityType): boolean => {
      return ([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] as const).includes(val)
    }
  },
  endOpacity: {
    type: Number as PropType<RippleOpacityType>,
    default: (): RippleOpacityType => 0,
    validator: (val: RippleOpacityType): boolean => {
      return ([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] as const).includes(val)
    }
  },
  noSelect: {
    type: Boolean,
    default: (): boolean => true
  }
} as const

export type RipplePropsType = ExtractPropTypes<typeof Props>
