export type { FormProps } from './props'

/**
 * submit 回调参数类型接口
 *
 * @param ok 是否验证成功
 * @param res 校验结果
 * @param evt 事件对象
 */
export interface FormParam {
  ok: boolean
  res: Record<string, boolean | string>
  evt: SubmitEvent
}

/**
 * 表单 submit 回调类型
 *
 * @param params 参数对象
 */
export type FormSubmit = (params: FormParam) => void

export interface FormInject {
  labelWidth: string | number
  model: Object
  onSubmit: FormSubmit
  childrenCheckResult: Record<string, boolean | string>
}
