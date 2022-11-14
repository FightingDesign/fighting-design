import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'

export const Props = {
  /**
   * 是否展示
   */
  visible: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 文字内容
   */
  text: {
    type: String
  },
  /**
   * 自定义文字颜色
   */
  fontColor: {
    type: String
  },
  /**
   * 是否全屏显示
   */
  fullscreen: {
    type: Boolean
  },
  /**
   * 自定义背景色
   */
  background: {
    type: String
  },
  /**
   * 自定义 icon
   */
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  }
} as const

export type LoadingPropsType = ExtractPropTypes<typeof Props>
