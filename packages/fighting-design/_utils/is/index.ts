const { toString } = Object.prototype

/**
 * 检测一个值是否为指定的类型
 *
 * @param value 要检测的值
 * @param type 预期类型
 * @returns { Boolean } 这个值是否为传入的类型
 */
export const is = (value: unknown, type: string): boolean => {
  return toString.call(value) === `[object ${type}]`
}

/**
 * 检测一个数据是否为 string 类型
 *
 * @param value 要检测的值
 * @returns { Boolean }
 */
export const isString = (value: unknown): value is string => typeof value === 'string'

/**
 * 检测一个数据是否为 number 类型
 *
 * @param value 要检测的数据
 * @returns { Boolean }
 * @see isNaN() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 */
export const isNumber = (value: unknown): value is number => typeof value === 'number' && !isNaN(value)

/**
 * 检测一个数据是否为 boolean 类型
 *
 * @param value 要检测的数据
 * @returns { Boolean }
 */
export const isBoolean = (value: unknown): value is boolean => is(value, 'Boolean')

/**
 * 判断一个值是否为 object 类型
 *
 * @param value 要检测的值
 * @returns { Boolean }
 */
export const isObject = (value: unknown): value is Object => is(value, 'Object')

/**
 * 判断一个值是否为 function 类型
 *
 * @param value 要检测的值
 * @returns { Boolean }
 */
export const isFunction = (value: unknown): value is Function => is(value, 'Function')

/**
 * 判断一个值是否为 array 类型
 *
 * @param value 要检测的值
 * @returns { Boolean }
 */
export const isArray = Array.isArray
