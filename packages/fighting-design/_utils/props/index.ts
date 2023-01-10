import type { PropType } from 'vue'
import type { Validator, BasicType } from './interface'

/**
 * 设置 boolean 类型的 prop 参数
 *
 * @param defaultVal 默认值
 */
export const setBooleanProp = (defaultVal = false): BasicType<BooleanConstructor, boolean> =>
  ({
    type: Boolean,
    default: () => defaultVal
  } as const)

/**
 * 设置 number 类型 props 参数
 *
 * @param defaultVal 默认值
 */
export const setNumberProp = <T extends number>(defaultVal?: null | T): BasicType<NumberConstructor, number | null> =>
  ({
    type: Number,
    default: () => defaultVal || null
  } as const)

/**
 * 设置 string 类型的 prop 参数
 *
 * @param defaultVal 默认值
 * @param validator 校验器
 */
export const setStringProp = <T extends string>(
  defaultVal?: null | T,
  validator?: Validator
): BasicType<PropType<T>, T | null> => {
  if (validator) {
    return {
      type: String as unknown as PropType<T>,
      default: () => defaultVal || null,
      validator
    } as const
  }

  return {
    type: String as unknown as PropType<T>,
    default: () => defaultVal || null
  } as const
}

/**
 * 设置 string & number 类型 props 参数
 *
 * @param defaultVal 默认值
 */
export const setStringNumberProp = <T extends string | number>(
  defaultVal?: T
): BasicType<PropType<string | number>, string | number | null> =>
  ({
    type: [String, Number] as PropType<string | number>,
    default: () => defaultVal || null
  } as const)

/**
 * 设置 object 类型 props 参数
 *
 * @param defaultVal 默认值
 */
export const setObjectProp = <T>(defaultVal = null): BasicType<PropType<T>, null> =>
  ({
    type: Object as PropType<T>,
    default: () => defaultVal
  } as const)

/**
 * 设置 function 类型 props 参数
 *
 * @param defaultVal 默认值
 */
export const setFunctionProp = <T extends Function>(defaultVal = null): BasicType<PropType<T>, null> =>
  ({
    type: Function as PropType<T>,
    default: () => defaultVal
  } as const)
