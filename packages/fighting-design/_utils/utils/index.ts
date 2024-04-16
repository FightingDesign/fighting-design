import { isString, isNumber } from '..'

/**
 * 保留小数点后 no 位
 *
 * @see Number.prototype.toFixed() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 * @param { number } value 带有小数的数字
 * @param { number } [no = 2] 保留位数
 * @returns { number } 转换后的数字
 */
export const financial = (value: number, no = 2): number => {
  return isNumber(value) ? Number(value.toFixed(no)) : value
}

/**
 * 防抖
 *
 * 来处理对于短时间内连续触发的事件加以限制
 *
 * @param { Function } func 需要防抖的函数，类型为一个泛型 F，该泛型继承于一个可接受任意数量和类型参数的函数
 * @param { number } [wait = 1000] 等待的毫秒数，类型为一个数字
 */
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay = 1000
): ((...args: Parameters<T>) => void) => {
  /** 计时器实例 */
  let timeout: ReturnType<typeof setTimeout> | undefined

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
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
export const zeroPad = (value: number): string => {
  if (isNumber(value)) {
    return value < 10 ? `0${value}` : value.toString()
  }

  return '00'
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
export const convertSize = (size: string | number | undefined, target = 'px'): string => {
  if (isString(size) && size.length) {
    return size
  }

  if (isNumber(size)) {
    return size + target
  }

  return ''
}

/**
 * 将字符串的尺寸转为数字
 *
 * 例如: 12px => 12
 *
 * @see Number.parseFloat() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
 *
 * @param { string | number } size 尺寸
 * @returns { number } 数字尺寸
 */
export const sizeToNum = (size: string | number): number => {
  if (!size) {
    return 0
  }

  if (isNumber(size)) {
    return size
  }

  const parse = Number.parseFloat(size)

  // 避免转换结果为 NaN
  return isNumber(parse) ? parse : 0
}

const convertFormatRegExp = /([A-Z])/g

/**
 * 驼峰命名转换为短横线命名
 *
 * @see String.prototype.replace() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 * @see String.prototype.toLowerCase() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 * @param { string } str 需要转换的字符串
 * @returns { string } 短横线命名
 */
export const convertFormat = (str: string): string => {
  return str.replace(convertFormatRegExp, (_: string, p1: string, offset: number): string => {
    // 判断是否为首字母
    if (offset === 0) {
      return p1.toLowerCase()
    } else {
      return '-' + p1.toLowerCase()
    }
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
  if (!str || !str.length) {
    return []
  }

  return str.split(rule)
}
