import { setStringNumberProp } from '../../_utils'
import type { ExtractPropTypes, PropType, InjectionKey } from 'vue'
import type { FormSubmit } from './interface'

export const Props = {
  /** 每个 label 的宽度 */
  labelWidth: setStringNumberProp(),
  /** 表单数据对象 */
  model: {
    type: Object,
    default: (): null => null
  },
  /**  提交表单触发的回调 */
  onSubmit: {
    type: Function as PropType<FormSubmit>,
    default: (): null => null
  }
} as const

export type FormProps = ExtractPropTypes<typeof Props>

export const FORM_PROVIDE_KEY: InjectionKey<FormProps> = Symbol('form-provide-key')
