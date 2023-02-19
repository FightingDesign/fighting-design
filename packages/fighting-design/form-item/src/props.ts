import { setStringProp } from '../../_utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { FormItemRules, FormItemRulesItem } from './interface'

export const Props = {
  /** label */
  label: setStringProp(),
  /** 对应的验证规则名称 */
  name: setStringProp(),
  /** 规则 */
  rules: {
    type: [Array, Object] as PropType<FormItemRules | FormItemRulesItem>,
    default: (): null => null
  }
} as const

/** form-item 组件 props 类型 */
export type FormItemProps = ExtractPropTypes<typeof Props>
