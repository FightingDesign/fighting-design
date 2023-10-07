export type { CalendarProps } from './props'

/**
 * 日历组件对于日期切换，和月份切换的回调函数类型
 *
 * @param { number } year 年份
 * @param { number } month 月份
 * @param { number } date 日期
 */
export type CalendarChange = (year: number, month: number, date: number) => void
