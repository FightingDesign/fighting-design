import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'
import type { HandleMouseEventInterface } from '../../_interface'

export const Props = {
  /**
   * @zh 自定义尺寸
   */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * @zh 是否为圆角的
   */
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * @zh 是否禁用
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * @zh 自定义颜色
   */
  color: {
    type: String,
    default: (): null => null
  },
  /**
   * @zh 自定义 icon
   */
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * @zh 点击之后执行的回调
   */
  click: {
    type: Function as PropType<HandleMouseEventInterface>,
    default: (): null => null
  }
} as const

export type CloseBtnPropsType = ExtractPropTypes<typeof Props>
