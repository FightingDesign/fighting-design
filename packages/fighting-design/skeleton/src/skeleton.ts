import type { PropType } from 'vue'
import type { skeletonSize } from './interface'

export const Props = {
  rounded: {
    type: Boolean,
    default: false
  },
  animated: {
    type: Boolean,
    default: false
  },
  circled: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: 1
  },
  loading: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<skeletonSize>,
    default: (): skeletonSize => 'default'
  }
} as const
