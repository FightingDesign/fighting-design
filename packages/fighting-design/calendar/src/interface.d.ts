export type { CalendarPropsType } from './calendar'

export interface CalendarMowDataClassListInterface {
  (_month: number, _date: number): string
}

export interface CalendarOptionClickInterface {
  (target: targetType): void
}

export interface CalendarHandleClickInterface {
  (_month: number, _date: number): void
}

export interface CalendarEmitInterface {
  year: number
  month: number
  date: number
}

export type CalendarTargetType = 'last' | 'now' | 'next'

interface CalendarMemorandumContentInterface {
  type?: 'default' | 'primary' | 'success' | 'danger' | 'warning'
  content: string
}

export type CalendarMemorandumType = Record<string, CalendarMemorandumContentInterface[]>
