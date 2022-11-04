import type { Ref, ComputedRef } from 'vue'
export type { OrdinaryFunctionInterface } from '../../_interface'
export type { GetLunarDetailReturnInterface } from '../../_utils/calendar-lunar/interface'

export interface UseCalculiTimeReturnInterface {
  AllMonthDays: ComputedRef<GetLunarDetailReturnInterface[]>
  changeLastMonth(): void
  changeNextMonth(): void
}

export interface UseCalculiTimeInterface {
  (year: Ref<number>, month: Ref<number>): DiffDayReturnInterface
}
