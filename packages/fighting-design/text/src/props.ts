import { setBooleanProp, setStringProp, setStringNumberProp } from '../../_utils'
import { FIGHTING_TYPE } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
import type { TextDecoration } from './interface'
import type { FightingType } from '../../_interface'

export const Props = {
  /**
   * 类型
   *
   * @values default primary success danger warning
   */
  type: setStringProp<FightingType>(undefined, (val: FightingType): boolean => {
    return FIGHTING_TYPE.includes(val)
  }),
  /**
   * 文字大小
   *
   * @see font-size https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size
   */
  size: setStringNumberProp(),
  /**
   * 文字颜色
   *
   * @see color https://developer.mozilla.org/zh-CN/docs/Web/CSS/color
   */
  color: setStringProp(),
  /**
   * 背景颜色
   *
   * @see background https://developer.mozilla.org/zh-CN/docs/Web/CSS/background
   */
  background: setStringProp(),
  /**
   * 是否独占一行
   *
   * @see display https://developer.mozilla.org/zh-CN/docs/Web/CSS/display
   */
  block: setBooleanProp(),
  /**
   * 文字间距
   *
   * @see letter-spacing https://developer.mozilla.org/zh-CN/docs/Web/CSS/letter-spacing
   */
  spacing: setStringNumberProp(),
  /**
   * 行高
   *
   * @see line-height https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height
   */
  lineHeight: setStringNumberProp(),
  /**
   * 首字符缩进量
   *
   * @see text-indent https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-indent
   */
  indent: setStringNumberProp(),
  /**
   * 文字是否以粗体显示
   *
   * @see font-weight https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight
   */
  bold: setBooleanProp(),
  /**
   * 文字的修饰
   *
   * @see text-decoration https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration
   * @values overline line-through underline
   */
  decoration: setStringProp<TextDecoration>(undefined, (val: TextDecoration): boolean => {
    return (['overline', 'line-through', 'underline'] as const).includes(val)
  }),
  /**
   * 内边距
   *
   * @see padding https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding
   */
  padding: setStringNumberProp(),
  /**
   * 宽度
   *
   * @see width https://developer.mozilla.org/zh-CN/docs/Web/CSS/width
   */
  width: setStringNumberProp(),
  /** 是否省略文本，需配合 width 宽度使用 */
  ellipsis: setBooleanProp(),
  /**
   * 是否居中
   *
   * @see text-align https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align
   */
  center: setBooleanProp()
} as const

/** text 组件 props 类型 */
export type TextProps = ExtractPropTypes<typeof Props>
