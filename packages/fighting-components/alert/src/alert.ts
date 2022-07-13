import type { PropType } from 'vue'
import type { alertType } from './interface'

export const Props = {
  /**
   * 类型/主题
   */
  type: {
    type: String as PropType<alertType>,
    default: (): alertType => 'primary',
    validator: (val: alertType): boolean => {
      return (
        ['primary', 'success', 'danger', 'warning', 'default'] as const
      ).includes(val)
    }
  },
  /**
   * 文字大小
   */
  size: {
    type: String,
    default: (): string => ''
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
   * ICON
   */
  icon: {
    type: String,
    default: (): string => ''
  },
  /**
   * 可关闭
   */
  close: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 简约
   */
  simple: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 标题
   */
  title: {
    type: String,
    default: (): string => ''
  },
  /**
   * 圆角
   */
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 背景颜色
   */
  background: {
    type: String,
    default: (): string => ''
  },
  /**
   * 字体颜色
   */
  color: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  onClose: (evt: MouseEvent): MouseEvent => evt
} as const
