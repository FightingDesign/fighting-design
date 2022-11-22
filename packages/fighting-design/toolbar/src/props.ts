import type { PropType, ExtractPropTypes } from 'vue'
import type { ToolbarType, ToolbarClickInterface } from './interface'

export const Props = {
  /**
   * @zh 显示为圆角
   */
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * @zh 尺寸
   */
  size: {
    type: String as PropType<ToolbarType>,
    default: (): ToolbarType => 'large',
    validator: (val: ToolbarType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * @zh 背景颜色
   */
  background: {
    type: String,
    default: (): null => null
  },
  /**
   * @zh 字体颜色
   */
  textColor: {
    type: String,
    default: (): null => null
  },
  /**
   * @zh 是否固定定位
   */
  fixed: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * @zh 自定义宽度
   */
  width: {
    type: String,
    default: (): null => null
  },
  /**
   * @zh 自定义高度
   */
  height: {
    type: String,
    default: (): null => null
  },
  /**
   * @zh 点击之后触发的回调
   */
  onClick: {
    type: Function as PropType<ToolbarClickInterface>,
    default: (): null => null
  }
} as const

export type ToolbarPropsType = ExtractPropTypes<typeof Props>
