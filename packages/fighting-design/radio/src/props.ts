import { setBooleanProp, setStringProp, setFunctionProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { RadioModelValue, RadioChange } from '../../radio-group'

export const Props = {
  /** 绑定值 */
  modelValue: {
    type: [String, Number, Boolean] as PropType<RadioModelValue>,
    default: (): null => null
  },
  /**是否禁用 */
  disabled: setBooleanProp(),
  /**
   * 自定义 name
   *
   * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name
   */
  name: setStringProp<string>('f-radio'),
  /** 选框对应的值 */
  label: {
    type: [String, Number, Boolean] as PropType<RadioModelValue>,
    default: (): null => null
  },
  /** 绑定值变化时触发 */
  onChange: setFunctionProp<RadioChange>()
} as const

/** radio 组件 props 类型 */
export type RadioProps = ExtractPropTypes<typeof Props>
