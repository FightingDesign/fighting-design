import type {
  classListInterface,
  solar2lunarReturnInterface
} from '../../_interface'

export interface dayMonthInterface {
  (month: number, year: number): number
}

export interface convertUppercaseInterface {
  (week: number): string
}

export interface mowDataClassListInterface {
  (data: number): classListInterface
}

export interface optionClickInterface {
  (evt: MouseEvent): void
}

export interface addPrefixInterface {
  (num: number): string
}

export interface getLunarInterface {
  (day: number): solar2lunarReturnInterface
}

export interface handleClickInterface {
  (day: number): void
}
