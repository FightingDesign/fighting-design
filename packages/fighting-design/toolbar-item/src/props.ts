import type { PropType, ExtractPropTypes, VNode, Component } from 'vue'
import type { HandleMouseEventInterface } from '../../_interface'

export const Props = {
  /**
   * @zh 自定义文字颜色
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
   * @zh 自定义 icon 大小
   */
  iconSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): number => 16
  },
  /**
   * @zh 唯一值
   */
  index: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * @zh 点击之后触发的回调
   */
  onClick: {
    type: Function as PropType<HandleMouseEventInterface>,
    default: (): null => null
  }
} as const

export type ToolbarItemPropsType = ExtractPropTypes<typeof Props>
