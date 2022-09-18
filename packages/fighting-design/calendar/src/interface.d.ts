import type {
  classListInterface
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
