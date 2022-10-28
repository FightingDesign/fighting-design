import type { PropType, ExtractPropTypes } from 'vue'
import type { BadgeType } from './interface'

export const Props = {
  value: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  max: {
    type: Number,
    default: (): number => 99
  },
  dot: {
    type: Boolean,
    default: (): boolean => false
  },
  show: {
    type: Boolean,
    default: (): boolean => false
  },
  type: {
    type: String as PropType<BadgeType>,
    default: (): BadgeType => 'danger',
    validator: (val: BadgeType): boolean => {
      return (['primary', 'success', 'danger', 'warning'] as const).includes(
        val
      )
    }
  },
  color: {
    type: String,
    default: (): string => ''
  },
  textColor: {
    type: String,
    default: (): string => ''
  }
} as const

export type BadgePropsType = ExtractPropTypes<typeof Props>
