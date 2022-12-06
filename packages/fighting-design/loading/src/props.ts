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
   * 加载中文案
   */
  text: {
    type: String
  },
  /**
   * 加载中文案颜色
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
   * 自定义遮罩层背景色
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

export type LoadingProps = ExtractPropTypes<typeof Props>
