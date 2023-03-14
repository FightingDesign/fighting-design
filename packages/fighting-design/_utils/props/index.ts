import type { Validator } from './interface'

/**
 * 基本类型设置参数
 * 
 * @param { Object } type 类型
 * @param { * } defaultValue 默认值 
 * @param { Function } [validator]校验器 
 * @returns { Object }
 */
const createBasicType = <T, F = T>(type: T, defaultValue: F, validator?: Validator): {
  type: T
  default: F
  validator?: Validator
} => {
  return validator
    ? { type, default: defaultValue, validator }
    : { type, default: defaultValue }
}

/**
 * 复杂类型
 * 
 * @param { Object } type 类型
 * @param { Function} defaultValue 默认值 
 * @returns { Object }
 */
const createComplexType = <T, F = T>(type: T, defaultValue: () => F): {
  type: T
  default: () => F
} => {
  return { type, default: defaultValue }
}

/**
 * 设置 boolean 类型的 prop 参数
 *
 * @param { boolean } [defaultVal = false] 默认值
 * @returns { Object } 配置对象
 */
export const setBooleanProp = <F = boolean>(defaultVal?: F): {
  type: BooleanConstructor
  default: false | NonNullable<F>
} => createBasicType(Boolean, defaultVal || false)

/**
 * 设置 number 类型 props 参数
 *
 * @param { number } [defaultVal] 默认值
 * @returns { Object } 配置对象
 */
export const setNumberProp = <F = number>(defaultVal?: F): {
  type: NumberConstructor;
  default: undefined | NonNullable<F>
} => createBasicType(Number, defaultVal || undefined)

/**
 * 设置 string 类型的 prop 参数
 *
 * @param { string } [defaultVal] 默认值
 * @param { Function } [validator] 校验器
 * @returns { Object } 配置对象
 */
export const setStringProp = <F = string>(defaultVal?: F, validator?: Validator): {
  type: StringConstructor
  default: NonNullable<F> | undefined
  validator?: Validator | undefined
} => createBasicType(String, defaultVal || undefined, validator)

/**
 * 设置 string & number 类型 props 参数
 *
 * @param { string | number } [defaultVal] 默认值
 * @returns { Object } 配置对象
 */
export const setStringNumberProp = <F = string | number>(defaultVal?: F): {
  type: (StringConstructor | NumberConstructor)[]
  default: NonNullable<F> | undefined
} => createBasicType([String, Number], defaultVal || undefined)

/**
 * 设置 object 类型 props 参数
 *
 * @param { Object } [defaultVal] 默认值
 * @returns { Object } 配置对象
 */
export const setObjectProp = <T = Record<string, unknown>>(defaultVal?: T): {
  type: ObjectConstructor
  default: () => NonNullable<T> | null
} => createComplexType(Object, () => defaultVal || null)

/**
 * 设置 function 类型 props 参数
 *
 * @param { Function } [defaultVal] 默认值
 * @returns { Object } 配置对象
 */
export const setFunctionProp = <T = Function>(defaultVal?: T): {
  type: FunctionConstructor
  default: () => NonNullable<T> | null
} => createComplexType(Function, () => defaultVal || null)

/**
 * 设置 array 类型 props 参数
 *
 * @param { Array } [defaultVal] 默认值
 * @returns { Object } 配置对象
 */
export const setArrayProp = <T = []>(defaultVal?: T): {
  type: ArrayConstructor
  default: () => NonNullable<T> | null
} => createComplexType(Array, () => defaultVal || null)
