import type { FormProps } from './props'

export type { FormProps } from './props'

/**
 * submit 回调参数类型接口
 *
 * @param { boolean } ok 是否验证成功
 * @param { Object } res 校验结果
 * @param { Object } evt 事件对象
 */
export interface FormParam {
  ok: boolean
  res: Record<string, boolean | string>
  evt: SubmitEvent
}

/**
 * 表单 submit 回调类型
 *
 * @param { Object } params 参数对象
 */
export type FormSubmit = (params: FormParam) => void

/** 注入的依赖项类型 */
export type FormInject = FormProps & {
  childrenCheckResult: Record<string, boolean | string>
}

/** label 位置类型 */
export type LabelPosition = 'left' | 'top'
