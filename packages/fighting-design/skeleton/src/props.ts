import type { PropType, ExtractPropTypes } from 'vue'
import type { SkeletonSize } from './interface'

export const Props = {
  /**
   * 是否带圆角的
   */
  round: {
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
   * 尺寸
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  size: {
    type: String as PropType<SkeletonSize>,
    default: (): SkeletonSize => 'middle',
    validator: (val: SkeletonSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  }
} as const

export type SkeletonProps = ExtractPropTypes<typeof Props>
