export interface mowDataClassListInterface {
  (_month: number, _date: number): string
}

export interface optionClickInterface {
  (target: targetType): void
}

export interface handleClickInterface {
  (_month: number, _date: number): void
}

export interface CalendarEmitInterface {
  year: number
  month: number
  date: number
}

export type targetType = 'last' | 'now' | 'next'

interface memorandumContentInterface {
  type?: 'default' | 'primary' | 'success' | 'danger' | 'warning'
  content: string
}

export type CalendarMemorandumType = Record<string, memorandumContentInterface[]>
