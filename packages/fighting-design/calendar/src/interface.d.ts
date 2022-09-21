import type {
  getLunarDetailReturnInterface
} from '../../_interface'

export interface mowDataClassListInterface {
  (data: number): string
}

export interface optionClickInterface {
  (target: targetType): void
}

export interface getLunarInterface {
  (day: number): getLunarDetailReturnInterface
}

export interface handleClickInterface {
  (day: number, moth?: number): void
}

export interface EmitChangeDateInterface {
  year: number
  month: number
  day: number
}

export type targetType = 'last' | 'now' | 'next' 
