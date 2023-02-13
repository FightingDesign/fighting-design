import { setStringNumberProp, setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 自定义宽度 */
  width: setStringNumberProp(),
  /** 自定义内边距 */
  padding: setStringNumberProp(),
  /**
   * 背景色
   *
   * @see background https://developer.mozilla.org/zh-CN/docs/Web/CSS/background
   */
  background: setStringProp()
} as const

/** aside 组件 props 类型 */
export type AsideProps = ExtractPropTypes<typeof Props>
