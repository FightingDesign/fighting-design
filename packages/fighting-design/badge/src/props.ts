import type { PropType, ExtractPropTypes } from 'vue'
import type { BadgeType } from './interface'

export const Props = {
  /**
   * 显示值
   */
  value: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  /**
   * value 为数字时的最大值，超出显示为 value+
   */
  max: {
    type: Number,
    default: (): number => 99
  },
  /**
   * 展示为一个点
   */
  dot: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否显示
   */
  show: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 样式主题
   */
  type: {
    type: String as PropType<BadgeType>,
    default: (): BadgeType => 'danger',
    validator: (val: BadgeType): boolean => {
      return (['primary', 'success', 'danger', 'warning'] as const).includes(
        val
      )
    }
  },
  /**
   * 自定义颜色
   */
  color: {
    type: String,
    default: (): string => ''
  },
  /**
   * 自定义文字颜色
   */
  textColor: {
    type: String,
    default: (): string => ''
  }
} as const

export type BadgePropsType = ExtractPropTypes<typeof Props>
