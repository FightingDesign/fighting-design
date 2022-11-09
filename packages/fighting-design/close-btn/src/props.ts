import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'
import type { HandleMouseEventInterface } from '../../_interface'

export const Props = {
  /**
   * 自定义尺寸
   */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  /**
   * 是否为圆角的
   */
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义颜色
   */
  color: {
    type: String,
    default: (): string => ''
  },
  /**
   * 自定义 icon
   */
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * 点击之后执行的回调
   */
  click: {
    type: Function as PropType<HandleMouseEventInterface>,
    default: (): null => null
  },
  /**
   * hover 状态是否取消背景色
   */
  noHover: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type CloseBtnPropsType = ExtractPropTypes<typeof Props>
