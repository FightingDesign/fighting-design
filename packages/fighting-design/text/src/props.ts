import type { PropType, ExtractPropTypes } from 'vue'
import type { TextDecoration } from './interface'
import type { FightingType } from '../../_interface'

export const Props = {
  /**
   * 类型
   *
   * @values default primary success danger warning
   * @defaultValue default
   */
  type: {
    type: String as PropType<FightingType>,
    default: (): null => null,
    validator: (val: FightingType): boolean => {
      return (['default', 'primary', 'success', 'danger', 'warning'] as const).includes(val)
    }
  },
  /** 
   * 文字大小
   * 
   * @see font-size https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size
   */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 
   * 文字颜色
   * 
   * @see color https://developer.mozilla.org/zh-CN/docs/Web/CSS/color
   */
  color: {
    type: String,
    default: (): null => null
  },
  /** 
   * 背景颜色
   * 
   * @see background https://developer.mozilla.org/zh-CN/docs/Web/CSS/background
   */
  background: {
    type: String,
    default: (): null => null
  },
  /**
   * 是否独占一行
   * 
   * @see display https://developer.mozilla.org/zh-CN/docs/Web/CSS/display
   */
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 文字间距
   *
   * @see letter-spacing https://developer.mozilla.org/zh-CN/docs/Web/CSS/letter-spacing
   */
  spacing: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 行高
   * 
   * @see line-height https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height
   */
  lineHeight: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 首字符缩进量
   *
   * @see text-indent https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-indent
   */
  indent: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 文字是否以粗体显示
   * 
   * @see font-weight https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight
   */
  bold: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 文字的修饰
   *
   * @see text-decoration https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration
   * @values overline line-through underline
   */
  decoration: {
    type: String as PropType<TextDecoration>,
    default: (): null => null,
    validator: (val: TextDecoration): boolean => {
      return (['overline', 'line-through', 'underline'] as const).includes(val)
    }
  },
  /**
   * 内边距
   * 
   * @see padding https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding
   */
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 宽度
   * 
   * @see width https://developer.mozilla.org/zh-CN/docs/Web/CSS/width
   */
  width: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 是否省略文本，需配合 width 宽度使用 */
  ellipsis: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否居中
   * 
   * @see text-align https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align
   */
  center: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type TextProps = ExtractPropTypes<typeof Props>
