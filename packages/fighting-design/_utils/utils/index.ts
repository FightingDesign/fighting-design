import type {
  UtilsKeepDecimalInterface,
  UtilsDebounceInterface,
  UtilsIsNumberInterface,
  UtilsAddZeroInterface,
  UtilsSizeChangeInterface,
  UtilsIsBooleanInterface,
  UtilsIsStringInterface,
  UtilsSizeToNumInterface,
  UtilsIsObjectInterface,
  UtilsIsArrayInterface
} from './interface'

/**
 * 保留小数点后 no 位
 *
 * @see toFixed https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 * @param num 带有小数的数字
 * @param no 保留位数
 * @returns { Number } 转换后的数字
 */
export const keepDecimal: UtilsKeepDecimalInterface = (
  num: number,
  no = 2
): number => {
  return Number(num.toFixed(no))
}

/**
 * 防抖
 *
 * 来处理对于短时间内连续触发的事件加以限制
 *
 * @param callback 回调函数
 * @param delay 延时的时间
 * @returns { Function }
 */
export const debounce: UtilsDebounceInterface = (
  callback: Function,
  delay = 200
): Function => {
  let timer: NodeJS.Timeout
  return (): void => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout((): void => {
      callback()
    }, delay)
  }
}

/**
 * 检测一个数据是否为 number 类型
 *
 * @param target 要检测的数据
 * @returns { boolean }
 */
export const isNumber: UtilsIsNumberInterface = (
  target: unknown
): target is number => {
  return (
    typeof target === 'number' &&
    Object.prototype.toString.call(target) === '[object Number]'
  )
}

/**
 * 检测一个数据是否为 boolean 类型
 *
 * @param target 要检测的数据
 * @returns { boolean }
 */
export const isBoolean: UtilsIsBooleanInterface = (
  target: unknown
): target is boolean => {
  return (
    typeof target === 'boolean' &&
    Object.prototype.toString.call(target) === '[object Boolean]'
  )
}

/**
 * 判断一个值是否为 string 类型
 *
 * @param target 要检测的值
 * @returns { boolean }
 */
export const isString: UtilsIsStringInterface = (
  target: unknown
): target is string => {
  return (
    typeof target === 'string' &&
    Object.prototype.toString.call(target) === '[object String]'
  )
}

/**
 * 判断一个值是否为 object 类型
 *
 * @param target 要检测的值
 * @returns { boolean }
 */
export const isObject: UtilsIsObjectInterface = (
  target: unknown
): target is Object => {
  return (
    typeof target === 'object' &&
    Object.prototype.toString.call(target) === '[object Object]'
  )
}

/**
 * 判断一个值是否为 array 类型
 *
 * @param target 要检测的值
 * @returns { boolean }
 */
export const isArray: UtilsIsArrayInterface = (
  target: unknown
): target is [] => {
  return (
    typeof target === 'object' &&
    Object.prototype.toString.call(target) === '[object Array]'
  )
}

/**
 * 给数字小于 10 的数字前面加 0
 *
 * @param num 需检测的参数
 * @returns { string }
 */
export const addZero: UtilsAddZeroInterface = (num: number): string => {
  return num > 9 ? num.toString() : `0${num}`
}

/**
 * 将数字尺寸改为字符串
 *
 * 有些 props 传入的参数可能是 string 或者 number 类型
 *
 * 这些数值需要转换成单位，所以默认 string 类型是有单位的，如 1px、20%
 *
 * 对于 number 类型的参数，就需要追加 target 类型的单位
 *
 * @param size 尺寸
 * @param target 单位
 * @returns { string } 已经追加单位的字符串数值
 */
export const sizeChange: UtilsSizeChangeInterface = (
  size: string | number | undefined,
  target = 'px'
): string => {
  if (!size) return ''
  return typeof size === 'string' ? size : size + target
}

/**
 * 将字符串化的尺寸转为数字
 *
 * 例如: 12px => 12
 *
 * @see parseFloat https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
 * @param size 尺寸
 * @returns { number } 数字尺寸
 */
export const sizeToNum: UtilsSizeToNumInterface = (
  size: string | number
): number => {
  if (!size) return 0
  if (typeof size === 'number') return size
  return Number.parseFloat(size) || 0
}

/**
 * 驼峰命名转换为短横线命名
 *
 * @param str 需要转换的字符串
 * @returns { String } 短横线命名
 */
export const convertFormat = (str: string): string => {
  return str.replace(/([A-Z])/g, (match, p1: string): string => {
    return '-' + p1.toLowerCase()
  })
}
