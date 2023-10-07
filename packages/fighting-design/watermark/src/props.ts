import { setStringProp, setNumberProp, setStringNumberProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 水印内容 */
  content: setStringProp(),
  /** 文字大小 */
  fontSize: setNumberProp(40),
  /** 间距 */
  gap: setNumberProp(40),
  /** 文字颜色 */
  fontColor: setStringProp<string>('#111'),
  /**
   * 原生 z-index 属性
   *
   * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
   */
  zIndex: setStringNumberProp(9999)
} as const

/** watermark 组件 props 类型 */
export type WatermarkProps = ExtractPropTypes<typeof Props>
