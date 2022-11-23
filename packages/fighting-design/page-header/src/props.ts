import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'
import type { HandleMouseEventInterface } from '../../_interface'

export const Props = {
  /**
   * 返回图标
   */
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * 返回图标大小
   */
  iconSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '16px'
  },
  /**
   * 返回文本
   */
  backText: {
    type: String,
    default: (): string => '返回'
  },
  /**
   * 标题文本
   */
  title: {
    type: String,
    default: (): null => null
  },
  /**
   * 标题是否粗体
   */
  titleBold: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 标题颜色
   */
  titleColor: {
    type: String,
    default: (): null => null
  },
  /**
   * 标题是否居中
   */
  titleCenter: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 副标题文本
   */
  subtitle: {
    type: String,
    default: (): null => null
  },
  /**
   * 点击左侧区域触发
   */
  onBack: {
    type: Function as PropType<HandleMouseEventInterface>,
    default: (): null => null
  }
} as const

export type PageHeaderPropsType = ExtractPropTypes<typeof Props>
