import type { PropType, ExtractPropTypes } from 'vue'
import type { DividerPosition, DividerType } from './interface'

export const Props = {
  /**
   * 文字显示位置
   *
   * @values left center right
   * @defaultValue center
   */
  position: {
    type: String as PropType<DividerPosition>,
    default: (): DividerPosition => 'center',
    validator: (value: DividerPosition): boolean => {
      return (['left', 'center', 'right'] as const).includes(value)
    }
  },
  /**
   * 是否为竖线
   */
  vertical: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 线条颜色
   */
  color: {
    type: String,
    default: (): null => null
  },
  /**
   * 文字颜色
   */
  fontColor: {
    type: String,
    default: (): null => null
  },
  /**
   * 上下边距
   */
  margin: {
    type: String,
    default: (): null => null
  },
  /**
   * 背景颜色
   */
  background: {
    type: String,
    default: (): null => null
  },
  /**
   * 分隔符类型
   *
   * @values dashed dotted double solid
   * @defaultValue solid
   */
  type: {
    type: String as PropType<DividerType>,
    default: (): DividerType => 'solid',
    validator: (value: DividerType): boolean => {
      return (['dashed', 'dotted', 'double', 'solid'] as const).includes(value)
    }
  }
} as const

export type DividerProps = ExtractPropTypes<typeof Props>
