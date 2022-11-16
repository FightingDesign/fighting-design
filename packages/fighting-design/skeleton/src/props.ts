import type { PropType, ExtractPropTypes } from 'vue'
import type { SkeletonSizeType } from './interface'

export const Props = {
  /**
   * 是否带圆角的
   */
  rounded: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否展示波浪动画
   */
  animated: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 圆形占位图
   */
  circled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 渲染多行占位图
   */
  rows: {
    type: Number,
    default: (): number => 1
  },
  /**
   * 为 true 时，显示占位图。false 展示子组件
   */
  loading: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 设置尺寸，提供三个属性值，默认 default
   */
  size: {
    type: String as PropType<SkeletonSizeType>,
    default: (): SkeletonSizeType => 'default',
    validator: (val: SkeletonSizeType): boolean => {
      return (['default', 'small', 'large'] as const).includes(val)
    }
  }
} as const

export type SkeletonPropsType = ExtractPropTypes<typeof Props>
