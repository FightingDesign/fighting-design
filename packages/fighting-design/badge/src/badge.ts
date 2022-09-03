import type { badgeType } from './interface'
import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  value: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  max: {
    type: Number as PropType<number>,
    default: (): number => 99
  },
  dot: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  show: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  type: {
    type: String as PropType<badgeType>,
    default: (): badgeType => 'danger',
    validator: (val: badgeType): boolean => {
      return (['primary', 'success', 'danger', 'warning'] as const).includes(
        val
      )
    }
  },
  color: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  textColor: {
    type: String as PropType<string>,
    default: (): string => ''
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
