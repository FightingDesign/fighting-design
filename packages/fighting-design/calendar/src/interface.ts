export type { CalendarProps } from './props'

/**
 * 回调参数类型接口
 * @param { number } year 年份
 * @param { number } month 月份
 * @param { number } date 日期
 */
export interface CalendarChangeParams {
  year: number
  month: number
  date: number
}

/**
 * 日历组件对于日期切换，和月份切换的回调函数类型
 *
 * 可在参数中解构出年、月、日
 *
 * @param { Object } params 日期对象
 */
export type CalendarChange = (params: CalendarChangeParams) => void
