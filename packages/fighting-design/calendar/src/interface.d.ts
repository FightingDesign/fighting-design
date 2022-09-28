export interface MowDataClassListInterface {
  (_month: number, _date: number): string
}

export interface OptionClickInterface {
  (target: targetType): void
}

export interface HandleClickInterface {
  (_month: number, _date: number): void
}

export interface CalendarEmitInterface {
  year: number
  month: number
  date: number
}

export type CalendarTargetType = 'last' | 'now' | 'next'

interface MemorandumContentInterface {
  type?: 'default' | 'primary' | 'success' | 'danger' | 'warning'
  content: string
}

export type CalendarMemorandumType = Record<string, MemorandumContentInterface[]>
