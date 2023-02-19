import { setStringNumberProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 自定义高度
   *
   * @see height https://developer.mozilla.org/zh-CN/docs/Web/CSS/height
   */
  height: setStringNumberProp(),
  /**
   * 自定义内边距
   *
   * @see padding https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding
   */
  padding: setStringNumberProp()
} as const

/** header 组件 props 类型 */
export type HeaderProps = ExtractPropTypes<typeof Props>
