import type { badgeType } from '@fighting-design/fighting-type'
import type { PropType } from 'vue'

export const Props = {
  value: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
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
