import type { FightingType } from '../../_interface'

export type { CalendarProps } from './props'

export type CalendarTarget = 'last' | 'now' | 'next'

export interface CalendarCallbackParams {
  year: number
  month: number
  date: number
}

/**
 * 日历组件对于日期切换，和月份切换的回调函数接口
 *
 * 可在参数中解构出年、月、日
 *
 * @param year 年份
 * @param month 月份
 * @param date 日期
 */
export interface CalendarCallback {
  (params: CalendarCallbackParams): void
}

/**
 * 备忘录对象类型接口
 *
 * @param type 标签类型
 * @param content 标签内容
 */
export interface CalendarMemorandumContentInterface {
  type?: FightingType
  content: string
}

/**
 * 备忘录数据类型
 *
 * 以日期为键，CalendarMemorandumContentInterface 类型的数组
 *
 * 例：'2022-9-21': [{ type: 'danger', content: '今天要考试' }]
 */
export type CalendarMemorandumType = Record<string, CalendarMemorandumContentInterface[]>
