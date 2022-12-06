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
 * @returns { boolean }
 */
export const isString = (value: unknown): value is string => {
  return is(value, 'String')
}

/**
 * 检测一个数据是否为 number 类型
 *
 * @param value 要检测的数据
 * @returns { boolean }
 */
export const isNumber = (value: unknown): value is number => {
  return is(value, 'Number')
}

/**
 * 检测一个数据是否为 boolean 类型
 *
 * @param value 要检测的数据
 * @returns { boolean }
 */
export const isBoolean = (value: unknown): value is boolean => {
  return is(value, 'Boolean')
}

/**
 * 判断一个值是否为 object 类型
 *
 * @param value 要检测的值
 * @returns { boolean }
 */
export const isObject = (value: unknown): value is Object => {
  return is(value, 'Object')
}

/**
 * 判断一个值是否为 function 类型
 *
 * @param value 要检测的值
 * @returns { boolean }
 */
export const isFunction = (value: unknown): value is Function => {
  return is(value, 'Function')
}

/**
 * 判断一个值是否为 array 类型
 *
 * @param value 要检测的值
 * @returns { boolean }
 */
export const isArray = Array.isArray
