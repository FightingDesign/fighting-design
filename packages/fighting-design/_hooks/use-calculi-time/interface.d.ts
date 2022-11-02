import type { Ref, ComputedRef } from 'vue'
export type { GetLunarDetailReturnInterface } from '../../_interface'

export interface DiffDayReturnInterface {
  AllMonthDays: ComputedRef<GetLunarDetailReturnInterface[]>
  changeLastMonth(): void
  changeNextMonth(): void
}

export interface DiffDayInterface {
  (year: Ref<number>, month: Ref<number>): DiffDayReturnInterface
}
