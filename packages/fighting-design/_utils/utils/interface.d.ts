/**
 * 保留小数点后 no 位方法类型接口
 * 
 * num 传入的一个带有小数点的数字
 * 
 * no 需要保留的位数
 */
export interface UtilsKeepDecimalInterface {
  (num: number, no: number): number
}

/**
 * 防抖函数类型接口
 * 
 * 来处理对于短时间内连续触发的事件加以限制
 * 
 * callback 回调函数
 * 
 * delay 延时的时间
 * 
 */
export interface UtilsDebounceInterface {
  (callback: Function, delay: number): Function
}

/**
 * 检测一个数据是否为 Number 类型方法类型接口
 * 
 * 传入一个未知的类型，返回布尔值
 */
export interface UtilsIsNumberInterface {
  (target: unknown): target is number
}

/**
 * 检测一个数据是否为 Boolean 类型方法类型接口
 * 
 * 传入一个未知的类型，返回布尔值
 */
export interface UtilsIsBooleanInterface {
  (target: unknown): target is boolean
}

/**
 * 检测一个数据是否为 String 类型方法类型接口
 * 
 * 传入一个未知的类型，返回布尔值
 */
export interface UtilsIsStringInterface {
  (target: unknown): target is string
}

/**
 * 给数字小于 10 的数字前面加 0 方法类型接口
 * 
 * 多数用于对时间的处理
 */
export interface UtilsAddZeroInterface {
  (num: number): string
}

/**
 * 将数字尺寸改为字符串方法接口
 * 
 * 有些 props 传入的参数可能是 string 或者 number 类型
 * 
 * 这些数值需要转换成单位，所以默认 string 类型是有单位的，如 1px、20%
 * 
 * 对于 number 类型的参数，就需要追加 target 类型的单位
 * 
 * 返回已经追加单位的字符串数值
 * 
 * 有些情况下也有可能传入的是 undefined，所以也要加入该类型
 */
export interface UtilsSizeChangeInterface {
  (size: string | number | undefined, target?: string): string
}
