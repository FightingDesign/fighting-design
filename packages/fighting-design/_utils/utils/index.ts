import { isString, isNumber } from '..'

/**
 * 保留小数点后 no 位
 *
 * @see Number.prototype.toFixed() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 * @param { number } num 带有小数的数字
 * @param { number } [no = 2] 保留位数
 * @returns { number } 转换后的数字
 */
export const keepDecimal = (num: number, no = 2): number => {
  return Number(num.toFixed(no))
}

/** debounce 返回值类型 */
export type DebounceReturn = () => void

/**
 * 防抖
 *
 * 来处理对于短时间内连续触发的事件加以限制
 *
 * @param callback 回调函数
 * @param { number } [delay = 200] 延时的时间
 * @returns { Function }
 */
export const debounce = (callback: () => void, delay = 200): DebounceReturn => {
  /** 定时器函数 */
  let timer: NodeJS.Timeout

  return (): void => {
    timer && clearTimeout(timer)

    timer = setTimeout((): void => {
      callback()
    }, delay)
  }
}

/**
 * 给数字小于 10 的数字前面加 0
 *
 * @param { number } num 需检测的参数
 * @returns { string }
 */
export const addZero = (num: number): string => {
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
