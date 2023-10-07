import { setBooleanProp, setStringNumberProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 选项的值 */
  value: setStringNumberProp(),
  /** 选项的标签，若不设置则默认与 value 相同 */
  label: setStringNumberProp(),
  /**
   * 是否禁用
   *
   * @see disabled https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-disabled
   */
  disabled: setBooleanProp()
} as const

/** option 组件 props 类型 */
export type OptionProps = ExtractPropTypes<typeof Props>
