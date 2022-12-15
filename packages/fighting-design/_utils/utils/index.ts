import { isString, isNumber } from '../index'

/**
 * 保留小数点后 no 位
 *
 * @see toFixed https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 * @param num 带有小数的数字
 * @param no 保留位数
 * @returns { Number } 转换后的数字
 */
export const keepDecimal = (num: number, no = 2): number => {
  return Number(num.toFixed(no))
}

/**
 * debounce 返回值类型
 */
export type DebounceReturn = () => void

/**
 * 防抖
 *
 * 来处理对于短时间内连续触发的事件加以限制
 *
 * @param callback 回调函数
 * @param delay 延时的时间
 */
export const debounce = (callback: () => void, delay = 200): DebounceReturn => {
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
 * 给数字小于 10 的数字前面加 0
 *
 * @param num 需检测的参数
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
 * @param size 尺寸
 * @param target 单位
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
 * @see parseFloat https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
 *
 * @param size 尺寸
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
 * @param str 需要转换的字符串
 * @returns { String } 短横线命名
 */
export const convertFormat = (str: string): string => {
  return str.replace(/([A-Z])/g, (match: string, p1: string): string => {
    return '-' + p1.toLowerCase()
  })
}
