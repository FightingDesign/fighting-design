import type {
  keepDecimalInterface as a,
  debounceInterface as b,
  getTypeInterface as c,
  pastTimeInterface as d,
  pastTimeConfigInterface as e
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
 * 判断一个值是否为字符串
 * @param target 要检测的值
 */
export const isString: c = (target: unknown): boolean => {
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
export const isNumber: c = (target: unknown): boolean => {
  return (
    typeof target === 'number' &&
    Object.prototype.toString.call(target) === '[object Number]'
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
