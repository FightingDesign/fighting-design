export type { FormItemProps } from './props'

/**
 * 规则对象类型接口
 *
 * @param message 错误消息
 * @param required 是否必须
 * @param min 最小输入长度
 * @param max 最大输入长度
 * @param trigger 触发方式
 * @param regExp 正则校验
 */
export interface FormItemRulesItem {
  message?: string
  required?: boolean
  min?: number
  max?: number
  regExp?: RegExp
}

/**
 * 规则对象类型
 */
export type FormItemRules = FormItemRulesItem[]
