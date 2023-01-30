export type { TimePickerProps } from './time-picker'

/**
 * 当前的时间对象
 *
 * @param { string } hover 当前小时
 * @param { string } minute 当前分钟
 */
export interface TimePickerTimeList {
  hover: string
  minute: string
}
