import {
  setStringNumberProp,
  setFunctionProp,
  setObjectProp,
  setStringProp
} from '../../_utils'
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { FormSubmit, FormInject, LabelPosition } from './interface'

export const Props = {
  /** 表单数据对象 */
  model: setObjectProp(),
  /** 每个 label 的宽度 */
  labelWidth: setStringNumberProp(),
  /** label 的位置 */
  labelPosition: setStringProp<LabelPosition>('left', (val: LabelPosition): boolean => {
    return ['left', 'top'].includes(val)
  }),
  /**  提交表单触发的回调 */
  onSubmit: setFunctionProp<FormSubmit>()
} as const

/** form 组件 props 类型 */
export type FormProps = ExtractPropTypes<typeof Props>

/** form 组件注入的依赖项 */
export const FORM_PROVIDE_KEY: InjectionKey<FormInject> = Symbol('form-provide-key')
