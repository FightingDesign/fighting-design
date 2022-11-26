import type { OrdinaryFunctionInterface } from '../../_interface'

export type { CalendarPropsType } from './props'

export type CalendarTargetType = 'last' | 'now' | 'next'

/**
 * 当前日期高亮显示
 *
 * 如果是当然日期，返回特殊类名高亮显示
 *
 * @param _month 当前月份
 * @param _date 当前日期
 */
export interface CalendarMowDataClassListInterface {
  (_month: number, _date: number): string
}

/**
 * 点击操作栏
 *
 * 用于日历切换上个月、现在时间、下个月
 */
export interface CalendarOptionClickInterface {
  (target: CalendarTargetType): void
}

/**
 * 点击对每一天
 *
 * @param _month 当前月份
 * @param _date 当前日期
 */
export interface CalendarHandleClickInterface {
  (_month: number, _date: number): void
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
export interface CalendarCallbackInterface {
  ({ year: number, month: number, date: number }): void
}

/**
 * 备忘录对象类型接口
 *
 * @param type 标签类型
 * @param content 标签内容
 */
export interface CalendarMemorandumContentInterface {
  type?: 'default' | 'primary' | 'success' | 'danger' | 'warning'
  content: string
}

/**
 * 备忘录数据类型
 *
 * 以日期为键，CalendarMemorandumContentInterface 类型的数组
 *
 * 例：'2022-9-21': [{ type: 'danger', content: '今天要考试' }]
 */
export type CalendarMemorandumType = Record<
  string,
  CalendarMemorandumContentInterface[]
>

/**
 * 检测当前日期是否存在备忘录接口
 *
 * @param date 传入日期字符串
 */
export interface CalendarIsMemorandumInterface {
  (date: string): boolean
}

/**
 * 日期切换类型接口
 *
 * @param last 切换到上个月
 * @param next 切换到下个月
 * @param now 切换到当前时间
 */
export interface CalendarOptionInterface {
  last: OrdinaryFunctionInterface
  next: OrdinaryFunctionInterface
  now: OrdinaryFunctionInterface
}
