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

/**
 * 注入的依赖项
 * 
 * @param { string | number } labelWidth label 宽度
 * @param { Object } model 表单数据对象
 * @param { Function } onSubmit 提交表单触发的回调
 * @param { Object } childrenCheckResult 子节点校验结果
 */
export interface FormInject {
  labelWidth: string | number
  model: Object
  onSubmit: FormSubmit
  childrenCheckResult: Record<string, boolean | string>
}
