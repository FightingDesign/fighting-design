import type { PropType, ExtractPropTypes } from 'vue'
import type { TooltipPosition, TooltipState } from './interface'

export const Props = {
  /** 提示内容 */
  content: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 弹出方向
   *
   * @values top bottom right left
   * @defaultValue bottom
   */
  position: {
    type: String as PropType<TooltipPosition>,
    default: (): TooltipPosition => 'bottom',
    validator: (val: TooltipPosition): boolean => {
      return (['top', 'bottom', 'right', 'left'] as const).includes(val)
    }
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 展示状态
   *
   * @values hover active always
   * @defaultValue hover
   */
  state: {
    type: String as PropType<TooltipState>,
    default: (): TooltipState => 'hover',
    validator: (val: TooltipState): boolean => {
      return (['hover', 'active', 'always'] as const).includes(val)
    }
  },
  /** 是否显示箭头 */
  noArrow: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 是否加粗文字 */
  bold: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 是否使用浅色主题 */
  bright: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 自定义背景色 */
  background: {
    type: String,
    default: (): null => null
  },
  /** 自定义文字颜色 */
  fontColor: {
    type: String,
    default: (): null => null
  }
} as const

export type TooltipProps = ExtractPropTypes<typeof Props>
