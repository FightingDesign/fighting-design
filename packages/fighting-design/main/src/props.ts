import { setStringNumberProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 自定义内边距
   *
   * @see padding https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding
   */
  padding: setStringNumberProp()
} as const

/** main 组件 props 类型 */
export type MainProps = ExtractPropTypes<typeof Props>
