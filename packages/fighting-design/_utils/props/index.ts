import type { SetBooleanPropReturn } from './interface'

/**
 * 设置 boolean 类型的 prop 参数
 * 
 * @param defaultVal 默认值
 */
export const setBooleanProp = (defaultVal = false): SetBooleanPropReturn => ({
  type: Boolean,
  default: defaultVal
})
