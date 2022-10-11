import type {
  UtilsKeepDecimalInterface as a,
  UtilsDebounceInterface as b,
  UtilsIsNumberInterface as c,
  UtilsPastTimeInterface as d,
  UtilsPastTimeConfigInterface as e,
  UtilsAddZeroInterface as f,
  UtilsSizeChangeInterface as g,
  UtilsIsBooleanInterface as h,
  UtilsIsStringInterface as i
} from '../_interface'

/**
 * 保留小数点后 n 位
 * @param num 带有小数的数字
 * @param no 保留位数
 * @returns 转换结果
 */
export const keepDecimal: a = (num: number, no = 2): number => {
  return Number(num.toFixed(no))
}

/**
 * 防抖
 * @param handle 回调函数
 * @param delay 时间
 * @returns Function
 */
export const debounce: b = (handle: Function, delay = 200): Function => {
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
 * 检测一个数据是否为 Number 类型
 * @param target 要检测的数据
 * @returns boolean
 */
export const isNumber: c = (target: unknown): target is number => {
  return (
    typeof target === 'number' &&
    Object.prototype.toString.call(target) === '[object Number]'
  )
}

/**
 * 检测一个数据是否为 boolean 类型
 * @param target 要检测的数据
 * @returns boolean
 */
export const isBoolean: h = (target: unknown): target is boolean => {
  return (
    typeof target === 'boolean' &&
    Object.prototype.toString.call(target) === '[object Boolean]'
  )
}

/**
 * 判断一个值是否为字符串
 * @param target 要检测的值
 * @returns boolean
 */
export const isString: i = (target: unknown): target is string => {
  return (
    typeof target === 'string' &&
    Object.prototype.toString.call(target) === '[object String]'
  )
}

/**
 * 计算从一个时间到现在过去多久
 * @param time 开始时间 格式为：'2021-01-28 00:00'
 * @returns xx天xx小时xx分钟xx秒
 */
export const pastTime: d = (
  time: string,
  format = 'DD天HH小时MM分钟SS秒'
): string => {
  const now: number = new Date().getTime()
  const target: number = new Date(time.replace(/-/g, '/')).getTime()
  const diff: number = now - target

  const SECONDS: number = Math.floor(diff / 1000)
  const MINUTES: number = Math.floor(SECONDS / 60)
  const HOURS: number = Math.floor(MINUTES / 60)

  const config: e = {
    DD: Math.floor(HOURS / 24).toString(),
    HH: HOURS % 24 > 9 ? (HOURS % 24).toString() : '0' + (HOURS % 24),
    MM: MINUTES % 60 > 9 ? (MINUTES % 60).toString() : '0' + (MINUTES % 60),
    SS:
      SECONDS % 60 > 9
        ? (SECONDS % 60).toString().toString()
        : '0' + (SECONDS % 60)
  }

  for (const key in config) {
    format = format.replace(key, config[key])
  }
  return format
}

/**
 * 给数字前面加 0
 * @param num 日期
 * @returns 
 */
export const addZero: f = (num: number): string => {
  return num > 9 ? num.toString() : `0${num}`
}

/**
 * 将数字尺寸改为字符串
 * @param size 尺寸
 * @param target 单位
 * @returns 
 */
export const sizeChange: g = (size: string | number, target = 'px'): string => {
  return typeof size === 'string' ? size : size + target
}
