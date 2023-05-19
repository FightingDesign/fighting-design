import type { FormProps } from './props'

export type { FormProps } from './props'

/**
 * 表单 submit 回调类型
 *
 * @param { boolean } ok 表单检验是否通过
 * @param { Object } model 表单数据对象
 * @param { boolean } res 结果对象
 * @param { Object } evt 事件对象
 */
export type FormSubmit = (
  ok: boolean,
  model: Record<string, string>,
  res: Record<string, boolean | string>,
  evt: SubmitEvent | Event
) => void

/** 注入的依赖项类型 */
export type FormInject = FormProps & {
  childrenCheckResult: Record<string, boolean | string>
}

/** label 位置类型 */
export type LabelPosition = 'left' | 'top'
