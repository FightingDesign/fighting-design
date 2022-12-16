export type { FormItemProps } from './props'

/**
 * 规则对象类型接口
 * 
 * @param message 错误消息
 * @param required 是否必须
 */
export interface FormItemRulesItem {
  message?: string
  required?: boolean
}

/**
 * 规则对象类型
 */
export type FormItemRule = FormItemRulesItem[]
