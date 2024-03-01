import { toString } from '..'

/**
 * 检测一个值是否为指定的类型
 *
 * @param { string } type 预期类型
 * @returns { boolean } 这个值是否为传入的类型
 */
const is = (type: string) => {
  return (value: any): boolean => {
    return toString(value) === `[object ${type}]`
  }
}

/**
 * 检测一个数据是否为 date 类型
 */
export const isDate = is('Date')

/**
 * 检测一个数据是否为 string 类型
 *
 * @param { * } value 要检测的值
 * @returns { boolean }
 */
export const isString = (value: any): value is string => typeof value === 'string'

/**
 * 检测一个数据是否为 number 类型
 *
 * @param { * } value 要检测的数据
 * @returns { boolean }
 * @see isNaN() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 */
export const isNumber = (value: any): value is number =>
  typeof value === 'number' && !isNaN(value)

/**
 * 检测一个数据是否为 boolean 类型
 *
 * @param { * } value 要检测的数据
 * @returns { boolean }
 */
export const isBoolean = (value: any): value is boolean => typeof value === 'boolean'

/**
 * 判断一个值是否为 object 类型
 */
export const isObject = is('Object')

/**
 * 判断一个值是否为 function 类型
 *
 * @param { * } value 要检测的值
 * @returns { boolean }
 */
export const isFunction = (value: any): value is Function => typeof value === 'function'

/**
 * 判断一个值是否为 array 类型
 */
export const isArray = Array.isArray

/** 是否为浏览器环境 */
export const isBrowser: boolean = typeof window !== 'undefined'

/**
 * 是否为真值
 *
 * @param { * } value 检测的值
 * @returns { boolean }
 */
export const isTrue = (value: any): boolean => {
  if (isNaN(value) || value === void 0 || value === null) {
    return false
  }

  return true
}
