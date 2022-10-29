import type { PropType, ExtractPropTypes } from 'vue'
import type { SkeletonSizeType } from './interface'

export const Props = {
  rounded: {
    type: Boolean,
    default: (): boolean => false
  },
  animated: {
    type: Boolean,
    default: (): boolean => false
  },
  circled: {
    type: Boolean,
    default: (): boolean => false
  },
  rows: {
    type: Number,
    default: (): number => 1
  },
  loading: {
    type: Boolean,
    default: (): boolean => false
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
