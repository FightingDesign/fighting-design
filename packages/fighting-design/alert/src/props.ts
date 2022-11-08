import type { PropType, ExtractPropTypes, VNode, Component } from 'vue'
import type { AlertType, AlertOverflowType } from './interface'
import type { HandleMouseEventInterface } from '../../_interface'

export const Props = {
  /**
   * 类型
   */
  type: {
    type: String as PropType<AlertType>,
    default: (): AlertType => 'default',
    validator: (val: AlertType): boolean => {
      return (
        ['primary', 'success', 'danger', 'warning', 'default'] as const
      ).includes(val)
    }
  },
  /**
   * 文字大小
   */
  fontSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '15px'
  },
  /**
   * title 大小
   */
  titleSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '17px'
  },
  /**
   * 是否加粗
   */
  bold: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否居中
   */
  center: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否可关闭
   */
  close: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否为简约的
   */
  simple: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义标题
   */
  title: {
    type: String,
    default: (): string => ''
  },
  /**
   * 是否为圆角
   */
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义背景色
   */
  background: {
    type: String,
    default: (): string => ''
  },
  /**
   * 自定义颜色
   */
  color: {
    type: String,
    default: (): string => ''
  },
  /**
   * 自定义 title 颜色
   */
  titleColor: {
    type: String,
    default: (): string => ''
  },
  /**
   * 是否为固定定位
   */
  fixed: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 超出展示方式
   */
  overflow: {
    type: String as PropType<AlertOverflowType>,
    default: (): AlertOverflowType => '',
    validator: (val: AlertOverflowType) => {
      return (['hidden', ''] as const).includes(val)
    }
  },
  /**
   * 自定义关闭 icon
   */
  closeIcon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * 自定义之前的 icon
   */
  beforeIcon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * 关闭之后执行的回调函数
   */
  closeEnd: {
    type: Function as PropType<HandleMouseEventInterface>,
    default: (): null => null
  }
} as const

export type AlertPropsType = ExtractPropTypes<typeof Props>
