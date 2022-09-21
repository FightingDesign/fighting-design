import type { buttonType } from '../../button/src/interface'

export interface mowDataClassListInterface {
  (data: number): string
}

export interface optionClickInterface {
  (target: targetType): void
}

export interface handleClickInterface {
  (day: number, moth: number): void
}

export interface EmitChangeDateInterface {
  year: number
  month: number
  day: number
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
