import { setStringProp, setStringNumberProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 原生属性
   *
   * @see WAI-ARIA-Roles https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
   */
  role: setStringProp(),
  /**
   * 原生属性
   *
   * @see padding https://developer.mozilla.org/en-US/docs/Web/CSS/padding
   */
  padding: setStringNumberProp(),
  /**
   * 原生属性
   *
   * @see width https://developer.mozilla.org/en-US/docs/Web/CSS/width
   */
  width: setStringNumberProp(),
  /**
   * 原生属性
   *
   * @see height https://developer.mozilla.org/en-US/docs/Web/CSS/height
   */
  height: setStringNumberProp(),
  /**
   * 原生属性
   *
   * @see background https://developer.mozilla.org/en-US/docs/Web/CSS/background
   */
  background: setStringProp(),
  /**
   * 原生属性
   *
   * @see display https://developer.mozilla.org/en-US/docs/Web/CSS/display
   */
  display: setStringProp()
} as const

/** box 组件 props 类型 */
export type BoxProps = ExtractPropTypes<typeof Props>
