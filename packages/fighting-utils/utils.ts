import type {
  keepDecimalInterface,
  debounceInterface,
  getTypeInterface
} from './type'

/**
 * 保留小数点后 n 位
 * @param num 带有小数的数字
 * @param no 保留位数
 * @returns 转换结果
 */
export const keepDecimal: keepDecimalInterface = (
  num: number,
  no = 2
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
  delay = 200
): Function => {
  let timer: NodeJS.Timeout
  return (): void => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout((): void => {
      handle()
    }, delay)
  }
}

/**
 * 判断一个值是否为字符串
 * @param target 要检测的值
 */
export const isString: getTypeInterface = (target: unknown): boolean => {
  return (
    typeof target === 'string' &&
    Object.prototype.toString.call(target) === '[object String]'
  )
}

/**
 * 检测一个数据是否为 Number 类型
 * @param target 要检测的数据
 * @returns boolean
 */
export const isNumber: getTypeInterface = (target: unknown): boolean => {
  return (
    typeof target === 'number' &&
    Object.prototype.toString.call(target) === '[object Number]'
  )
}
