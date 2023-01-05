import type { PropType, ExtractPropTypes } from 'vue'
import type { RadioModelValue, RadioChange } from '../../radio-group'

export const Props = {
  /** 绑定值 */
  modelValue: {
    type: [String, Number, Boolean] as PropType<RadioModelValue>,
    default: (): null => null
  },
  /**是否禁用 */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义 name
   *
   * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name
   */
  name: {
    type: String,
    default: (): string => 'f-radio'
  },
  /** 选框对应的值 */
  label: {
    type: [String, Number, Boolean] as PropType<RadioModelValue>,
    default: (): null => null
  },
  /** 绑定值变化时触发 */
  onChange: {
    type: Function as PropType<RadioChange>,
    default: (): null => null
  }
} as const

export type RadioProps = ExtractPropTypes<typeof Props>
