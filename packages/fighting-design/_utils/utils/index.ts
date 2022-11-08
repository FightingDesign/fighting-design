import type {
  UtilsKeepDecimalInterface,
  UtilsDebounceInterface,
  UtilsIsNumberInterface,
  UtilsAddZeroInterface,
  UtilsSizeChangeInterface,
  UtilsIsBooleanInterface,
  UtilsIsStringInterface
} from './interface'

/**
 * 保留小数点后 no 位
 * @param num 带有小数的数字
 * @param no 保留位数
 * @returns { Number } 转换后的数字
 */
export const keepDecimal: UtilsKeepDecimalInterface = (num: number, no = 2): number => {
  return Number(num.toFixed(no))
}

/**
 * 防抖
 * 来处理对于短时间内连续触发的事件加以限制
 * @param callback 回调函数
 * @param delay 延时的时间
 * @returns { Function }
 */
export const debounce: UtilsDebounceInterface = (callback: Function, delay = 200): Function => {
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
 * 检测一个数据是否为 Number 类型
 * @param target 要检测的数据
 * @returns { boolean }
 */
export const isNumber: UtilsIsNumberInterface = (target: unknown): target is number => {
  return (
    typeof target === 'number' &&
    Object.prototype.toString.call(target) === '[object Number]'
  )
}

/**
 * 检测一个数据是否为 boolean 类型
 * @param target 要检测的数据
 * @returns { boolean }
 */
export const isBoolean: UtilsIsBooleanInterface = (target: unknown): target is boolean => {
  return (
    typeof target === 'boolean' &&
    Object.prototype.toString.call(target) === '[object Boolean]'
  )
}

/**
 * 判断一个值是否为字符串
 * @param target 要检测的值
 * @returns { boolean }
 */
export const isString: UtilsIsStringInterface = (target: unknown): target is string => {
  return (
    typeof target === 'string' &&
    Object.prototype.toString.call(target) === '[object String]'
  )
}

/**
 * 给数字小于 10 的数字前面加 0
 * @param num 日期
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
export const sizeChange: UtilsSizeChangeInterface = (size: string | number | undefined, target = 'px'): string => {
  if (!size) return ''
  return typeof size === 'string' ? size : size + target
}
