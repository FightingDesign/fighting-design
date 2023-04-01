export type { TimePickerProps } from './props'

/**
 * 当前的时间对象
 *
 * @param { string } hour 当前小时
 * @param { string } minute 当前分钟
 * @param { string } second 当前秒钟
 */
export interface TimePickerTimeList {
  hour: string
  minute: string
  second: string
}
