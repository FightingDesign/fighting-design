import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'
import type { HandleMouseEventInterface } from '../../_interface'

export const Props = {
  /**
   * icon 内容
   */
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * icon 颜色
   */
  color: {
    type: String,
    default: (): null => null
  },
  /**
   * icon 大小
   */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 点击之后触发的回调
   */
  click: {
    type: Function as PropType<HandleMouseEventInterface>,
    default: (): null => null
  }
} as const

export type SvgIconPropsType = ExtractPropTypes<typeof Props>
