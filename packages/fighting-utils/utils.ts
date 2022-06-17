import type { keepDecimalInterface, debounceInterface } from './type'

/**
 * 保留小数点后 n 位
 * @param num 带有小数的数字
 * @param no 保留位数
 * @returns 转换结果
 */
export const keepDecimal: keepDecimalInterface = (
  num: number,
  no: number = 2
): number => {
  return Number(num.toFixed(no))
}

/**
 * 防抖
 * @param handle 回调函数
 * @param delay 时间
 * @returns Function
 */
export const debounce: debounceInterface = (
  handle: Function,
  delay: number = 200
): Function => {
  let timer: any = null
  return (): void => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout((): void => {
      handle()
    }, delay)
  }
}
