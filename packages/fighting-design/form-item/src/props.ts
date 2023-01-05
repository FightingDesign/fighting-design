import type { ExtractPropTypes, PropType } from 'vue'
import type { FormItemRules, FormItemRulesItem } from './interface'

export const Props = {
  /** label */
  label: {
    type: String,
    default: (): null => null
  },
  /** 对应的验证规则名称 */
  name: {
    type: String,
    default: (): null => null
  },
  /** 规则 */
  rules: {
    type: [Array, Object] as PropType<FormItemRules | FormItemRulesItem>,
    default: (): null => null
  }
} as const

export type FormItemProps = ExtractPropTypes<typeof Props>
