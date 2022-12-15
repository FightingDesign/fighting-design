import type { ExtractPropTypes, PropType, InjectionKey } from 'vue'

export const Props = {
  /**
   * 每个 label 的宽度
   */
  labelWidth: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 表单数据对象
   */
  model: {
    type: Object,
    default: (): null => null
  },
  /**
   * 规则
   */
  rules: {
    type: Object,
    default: (): null => null
  }
} as const

export type FormProps = ExtractPropTypes<typeof Props>

export const FORM_PROVIDE_KEY: InjectionKey<FormProps> = Symbol('form-provide-key')
