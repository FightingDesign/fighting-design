import type { PropType, ExtractPropTypes } from 'vue'
import type { SkeletonSizeType } from './interface'

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
    type: String as PropType<SkeletonSizeType>,
    default: (): SkeletonSizeType => 'default',
    validator: (val: SkeletonSizeType): boolean => {
      return (['default', 'small', 'large'] as const).includes(val)
    }
  }
} as const

export type SkeletonPropsType = ExtractPropTypes<typeof Props>
