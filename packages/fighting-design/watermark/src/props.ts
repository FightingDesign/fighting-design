import { setBooleanProp, setStringProp, setStringNumberProp, setNumberProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 水印内容 */
  content: setStringProp(),
  /** 水印的宽度 */
  width: setNumberProp(280),
  /** 水印的高度 */
  height: setNumberProp(200),
  /** 文字大小 */
  fontSize: setStringNumberProp('30px'),
  /** 文字颜色 */
  fontColor: setStringProp<string>('#333'),
  /** 自定义图片水印 */
  image: setStringProp(),
  /** 是否为块级元素 */
  block: setBooleanProp(),
  /**
   * 原生 z-index 属性
   *
   * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
   */
  zIndex: setNumberProp(100)
} as const

export type WatermarkProps = ExtractPropTypes<typeof Props>
