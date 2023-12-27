import type { PropType } from 'vue'

/**
 * 设置组件的 prop 参数
 *
 * @see 为组件的props标注类型 https://cn.vuejs.org/guide/typescript/options-api.html#typing-component-props
 *
 * 注意：你需要了解 null 和 undefined 的区别
 *
 * null       表示无对象  表示 no object
 * undefined  表示空值    表示 no value
 *
 * 如果一个值将来可能会是一个对象，但是目前还不是，则使用 null，也就是说 Object 类型的默认值都需要使用 null
 * 基本类型都使用 undefined 默认值
 */

/**
 * 设置 boolean 类型的 prop 参数
 *
 * @param { boolean } [defaultVal = false] 默认值
 * @returns { Object } 配置对象
 */
export const setBooleanProp = (
  defaultVal = false
): {
  readonly type: BooleanConstructor
  readonly default: boolean
} => {
  return { type: Boolean, default: defaultVal } as const
}

/**
 * 设置 number 类型 props 参数
 *
 * @param { number } [defaultVal = undefined] 默认值
 * @returns { Object } 配置对象
 */
export const setNumberProp = (
  defaultVal?: number
): {
  readonly type: NumberConstructor
  readonly default: number | undefined
} => {
  return { type: Number, default: defaultVal } as const
}

/**
 * 设置 string 类型的 prop 参数
 *
 * @param { string } [defaultVal = undefined] 默认值
 * @param { Function } [validator] 校验方法
 * @returns { Object } 配置对象
 */
export const setStringProp = <T extends string>(
  defaultVal?: T,
  validator?: (value: T) => boolean
): {
  readonly type: PropType<T>
  readonly default: T extends string ? T : undefined
  readonly validator?: (value: T) => boolean
} => {
  const prop = {
    type: String as unknown as PropType<T>,
    default: defaultVal
  } as {
    type: PropType<T>
    default: T extends string ? T : undefined
    validator?: (value: T) => boolean
  }

  if (validator) {
    prop.validator = validator
  }

  return prop
}

/**
 * 设置 string & number 类型 props 参数
 *
 * @param { string | number } [defaultVal = undefined] 默认值
 * @returns { Object } 配置对象
 */
export const setStringNumberProp = <T extends string | number>(
  defaultVal?: T
): {
  readonly type: PropType<string | number>
  readonly default: T | undefined
} => {
  return {
    type: [String, Number] as unknown as PropType<string | number>,
    default: defaultVal
  } as const
}

/**
 * 为了保证组件实例之间的独立性和数据隔离，避免因为共享引用导致的副作用和意外修改
 *
 * 引用类似默认值使用函数返回
 */

/**
 * 设置 object 类型 props 参数
 *
 * @param { Object } [defaultVal = null] 默认值
 * @returns { Object } 配置对象
 */
export const setObjectProp = <T extends object>(
  defaultVal = null
): {
  readonly type: PropType<T>
  readonly default: () => T | null
} => {
  return {
    type: Object as PropType<T>,
    default: (): T | null => defaultVal
  } as const
}

/**
 * 设置 function 类型 props 参数
 *
 * @param { Function } [defaultVal = null] 默认值
 * @returns { Object } 配置对象
 */
export const setFunctionProp = <T extends Function>(
  defaultVal = null
): {
  readonly type: PropType<T>
  readonly default: T | null
} => {
  return {
    type: Function as PropType<T>,
    default: defaultVal
  } as const
}

/**
 * 设置 array 类型 props 参数
 *
 * @param { Array } [defaultVal = null] 默认值
 * @returns { Object } 配置对象
 */
export const setArrayProp = <T>(
  defaultVal = []
): {
  readonly type: PropType<T>
  readonly default: () => T | null
} => {
  return {
    type: Array as unknown as PropType<T>,
    default: (): T | null => defaultVal as T
  } as const
}
