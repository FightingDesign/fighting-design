export type { TimePickerPropsType } from './time-picker'

/**
 * 当前的时间对象
 * 
 * @param hover 当前小时
 * @param minute 当前分钟
 */
export interface TimePickerTimeListInterface {
  hover: string
  minute: string
}

/**
 * 点击对应的时间进行选取方法类型接口
 *
 * @param date 当前的时间数字
 * @param params 小时还是分钟
 */
export interface TimePickerHandleClickInterface {
  (date: number, params: 'hover' | 'minute'): void
}
