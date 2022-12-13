import type { FightingType } from '../../_interface'

export type { CalendarProps } from './props'

/**
 * 回调参数类型接口
 * 
 * @param year 年份
 * @param month 月份
 * @param date 日期
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
 * @param params 日期对象
 */
export type CalendarChange = (params: CalendarChangeParams) => void

/**
 * 备忘录数据类型
 *
 * 例：'2022-9-21': [{ type: 'danger', content: '今天要考试' }]
 */
export type CalendarMemorandum = Record<string, {
  type?: FightingType
  content: string
}[]>
