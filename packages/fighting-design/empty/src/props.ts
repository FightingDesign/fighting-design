import { setStringNumberProp, setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 展示的内容 */
  content: setStringProp(),
  /** 内容文字大小 */
  contentSize: setStringNumberProp(),
  /** 内容文字颜色 */
  contentColor: setStringProp(),
  /** 自定义图片地址 */
  imageSrc: setStringProp(),
  /** 自定义图片尺寸 */
  imageSize: setStringNumberProp(),
  /** 自定义背景色 */
  background: setStringProp(),
  /** 自定义 icon 大小 */
  iconSize: setStringNumberProp(30)
} as const

/** empty 组件 props 类型 */
export type EmptyProps = ExtractPropTypes<typeof Props>
