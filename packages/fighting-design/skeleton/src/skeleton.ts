import type { PropType, ExtractPropTypes } from 'vue'
import type { skeletonSize } from './interface'

export const Props = {
  rounded: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  animated: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  circled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  rows: {
    type: Number as PropType<number>,
    default: 1
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  size: {
    type: String as PropType<skeletonSize>,
    default: (): skeletonSize => 'default'
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
