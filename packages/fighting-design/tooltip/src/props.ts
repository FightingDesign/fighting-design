import { setBooleanProp, setStringProp, setStringNumberProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { TooltipPosition, TooltipState } from './interface'

export const Props = {
  /** 提示内容 */
  content: setStringNumberProp(),
  /**
   * 弹出方向
   *
   * @values top bottom right left
   * @default bottom
   */
  position: setStringProp<TooltipPosition>('bottom', (val: TooltipPosition): boolean => {
    return (['top', 'bottom', 'right', 'left'] as const).includes(val)
  }),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /**
   * 展示状态
   *
   * @values hover active always
   * @default hover
   */
  state: setStringProp<TooltipState>('hover', (val: TooltipState): boolean => {
    return (['hover', 'active', 'always'] as const).includes(val)
  }),
  /** 是否显示箭头 */
  noArrow: setBooleanProp(),
  /** 是否加粗文字 */
  bold: setBooleanProp(),
  /** 是否使用浅色主题 */
  bright: setBooleanProp(),
  /** 自定义背景色 */
  background: setStringProp(),
  /** 自定义文字颜色 */
  fontColor: setStringProp()
} as const

/** tooltip 组件 props 类型 */
export type TooltipProps = ExtractPropTypes<typeof Props>
