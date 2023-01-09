import type { PropType } from 'vue'
import type {
  Validator,
  SetBooleanPropReturn,
  SetStringPropReturn
} from './interface'

/**
 * 设置 boolean 类型的 prop 参数
 * 
 * @param defaultVal 默认值
 */
export const setBooleanProp = (defaultVal = false): SetBooleanPropReturn => ({
  type: Boolean,
  default: defaultVal
})

/**
 * 设置 string 类型的 prop 参数
 * 
 * @param defaultVal 默认值
 * @param validator 校验器
 */
export const setStringProp = <T extends string>(defaultVal?: T, validator?: Validator): SetStringPropReturn => {
  if (validator) {
    return {
      type: String as unknown as PropType<T>,
      default: defaultVal || null,
      validator
    }
  }

  return {
    type: String,
    default: defaultVal || null
  }
}
