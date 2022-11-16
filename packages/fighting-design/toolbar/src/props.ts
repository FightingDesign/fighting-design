import type { PropType, ExtractPropTypes } from 'vue'
import type { ToolbarType, ToolbarClickInterface } from './interface'

export const Props = {
  /**
   * 显示为圆角
   */
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 尺寸
   */
  size: {
    type: String as PropType<ToolbarType>,
    default: (): ToolbarType => 'large',
    validator: (val: ToolbarType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * 背景颜色
   */
  background: {
    type: String,
    default: (): null => null
  },
  /**
   * 字体颜色
   */
  textColor: {
    type: String,
    default: (): null => null
  },
  /**
   * 是否固定定位
   */
  fixed: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义宽度
   */
  width: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义高度
   */
  height: {
    type: String,
    default: (): null => null
  },
  /**
   * 点击之后触发的回调
   */
  click: {
    type: Function as PropType<ToolbarClickInterface>,
    default: (): null => null
  }
} as const

export type ToolbarPropsType = ExtractPropTypes<typeof Props>
