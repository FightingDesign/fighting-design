import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'

export const Props = {
  /**
   * icon 内容
   */
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * 文字大小
   *
   * 可控制 svg 和文字
   */
  fontSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 文字颜色
   *
   * 可控制 svg 和文字
   */
  color: {
    type: String,
    default: (): null => null
  }
} as const

export type MenuItemPropsType = ExtractPropTypes<typeof Props>
