import type { PropType, ExtractPropTypes } from 'vue'
import type { TextType, TextDecorationType } from './interface'

export const Props = {
  /**
   * 类型
   */
  type: {
    type: String as PropType<TextType>,
    default: (): TextType => 'default',
    validator: (val: TextType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
    }
  },
  /**
   * 文字大小
   */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  /**
   * 文字颜色
   */
  color: {
    type: String,
    default: (): string => ''
  },
  /**
   * 背景颜色
   */
  background: {
    type: String,
    default: (): string => ''
  },
  /**
   * 是否独占一行
   */
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 文字间距
   */
  spacing: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  /**
   * 行高
   */
  lineHeight: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  /**
   * 首字符缩进量
   */
  indent: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  /**
   * 文字是否以粗体显示
   */
  bold: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 文字的修饰
   */
  decoration: {
    type: String as PropType<TextDecorationType>,
    default: (): string => ''
  },
  /**
   * 内边距
   */
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  /**
   * 宽度
   */
  width: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  /**
   * 是否省略文本，需配合 `width` 宽度使用
   */
  ellipsis: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否居中
   */
  center: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type TextPropsType = ExtractPropTypes<typeof Props>
