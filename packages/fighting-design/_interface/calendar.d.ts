import type { ComputedRef, Ref } from 'vue'

export interface GetLunarDetailReturnInterface {
  animal: string // 生肖
  IDayCn: string // 农历日期
  IMonthCn: string // 当前月份
  Term: string | null
  constellation: string // 星座
  cDay: number
  cMonth: number
  cYear: number
  date: string
  festival: string// 节日
  gzDay: string
  gzMonth: string
  gzYear: string
  isLeap: boolean
  isTerm: boolean
  isToday: boolean
  lDay: number
  lMonth: number
  lYear: number
  lunarDate: string
  lunarFestival: ''
  nWeek: number
  ncWeek: string // 星期
}

export interface DiffDayInterface {
  (year: Ref<number>, month: Ref<number>): DiffDayReturnInterface
}

export interface DiffDayReturnInterface {
  AllMonthDays: ComputedRef<h[]>
  changeLastMonth(): void
  changeNextMonth(): void
}

export type HolidayListType = Record<string, { title: string }>

export interface LunarInterface {
  private static getLunarYearDays(year: number): number
  private static leapMonth(year: number): number
  private static leapDays(year: number): number
  private static monthDays(year: number, month: number): number
  private static toGanZhiYear(lYear: number): string
  private static toConstellation(cMonth: number, cDay: number): string
  private static toGanZhi(offset: number): string
  private static getTerm(year: number, n: number): number
  private static toChinaMonth(month: number): string | -1
  private static toChinaDay(day: number): string
  private static getAnimal(year: number): string
  getLunarDetail(yPara: number, mPara: number, dPara: number): -1 | GetLunarDetailReturnInterface
}
