import type { keepDecimalInterface } from './type'

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
