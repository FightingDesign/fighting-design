import { isString, isNumber, warning } from '..'

/**
 * 保留小数点后 no 位
 *
 * @see Number.prototype.toFixed() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 * @param { number } value 带有小数的数字
 * @param { number } [no = 2] 保留位数
 * @returns { number } 转换后的数字
 */
export const keepDecimal = (value: number, no = 2): number => {
  if (isNumber(value)) {
    return Number(value.toFixed(no))
  }

  warning('keepDecimal', '`value` is not a number')

  return value
}

/**
 * 防抖
 *
 * 来处理对于短时间内连续触发的事件加以限制
 *
 * @param { Function } func 需要防抖的函数，类型为一个泛型 F，该泛型继承于一个可接受任意数量和类型参数的函数
 * @param { number } wait 等待的毫秒数，类型为一个数字
 */
export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  delay = 1000
): ((...args: Parameters<T>) => void) => {
  /** 计时器实例 */
  let timeout: ReturnType<typeof setTimeout> | undefined

  return (...args: Parameters<T>): void => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout((): void => {
      func(...args)
    }, delay)
  }
}

/**
 * 给数字小于 10 的数字前面加 0
 *
 * @param { number } value 需检测的参数
 * @returns { string } 结果字符串
 */
export const addZero = (value: number): string => {
  return value < 10 ? `0${value}` : value.toString()
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
 * @param { string | number } size 尺寸
 * @param { string } [target = 'px'] 单位
 * @returns { string } 已经追加单位的字符串数值
 */
export const sizeChange = (size: string | number | undefined, target = 'px'): string => {
  if (!size) return ''
  return isString(size) ? size : size + target
}

/**
 * 将字符串化的尺寸转为数字
 *
 * 例如: 12px => 12
 *
 * @see Number.parseFloat() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
 *
 * @param { string | number } size 尺寸
 * @returns { number } 数字尺寸
 */
export const sizeToNum = (size: string | number): number => {
  if (!size) return 0
  if (isNumber(size)) return size
  return Number.parseFloat(size) || 0
}

/**
 * 驼峰命名转换为短横线命名
 *
 * @see String.prototype.replace() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 * @see String.prototype.toLowerCase() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 * @param { string } str 需要转换的字符串
 * @returns { string } 短横线命名
 */
export const convertFormat = (str: string): string => {
  return str.replace(/([A-Z])/g, (match: string, p1: string): string => {
    return '-' + p1.toLowerCase()
  })
}

/**
 * 将字符串通过指定规则分隔
 *
 * @param { string } str 字符串
 * @param { string } rule 规则字符串
 * @returns { Array }
 */
export const splitString = (str: string, rule: string): string[] => {
  return str.split(rule)
}
