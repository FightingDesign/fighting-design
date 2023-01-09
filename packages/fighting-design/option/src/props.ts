import { setBooleanProp } from '../../_utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const Props = {
  /** 选项的值 */
  value: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 选项的标签，若不设置则默认与 value 相同 */
  label: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 是否禁用
   *
   * @see disabled https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-disabled
   */
  disabled: setBooleanProp()
} as const

export type OptionProps = ExtractPropTypes<typeof Props>
