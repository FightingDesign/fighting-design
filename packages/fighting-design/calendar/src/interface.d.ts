import type { buttonType } from '../../button/src/interface'

export interface mowDataClassListInterface {
  (_month: number, _date: number): string
}

export interface optionClickInterface {
  (target: targetType): void
}

export interface handleClickInterface {
  (_month: number, _date: number): void
}

export interface calendarEmitInterface {
  year: number
  month: number
  date: number
}

export type targetType = 'last' | 'now' | 'next'

export type positionType =
  | 'center'
  | 'top'
  | 'right'
  | 'left'
  | 'bottom'

interface memorandumContentInterface {
  type?: buttonType
  content: string
}

export type memorandumType = Record<string, memorandumContentInterface[]>
