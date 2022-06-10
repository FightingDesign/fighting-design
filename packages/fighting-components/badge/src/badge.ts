import type { badgeType } from '@fighting-design/fighting-type'
import type { PropType } from 'vue'

export const Props = {
  value: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  max: {
    type: Number,
    default: (): number => 99
  },
  isDot: {
    type: Boolean,
    default: (): boolean => false
  },
  hidden: {
    type: Boolean,
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
  }
} as const
