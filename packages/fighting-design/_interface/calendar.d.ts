import type { ComputedRef, Ref } from 'vue'

export interface getLunarDetailReturnInterface {
  Animal: string // 生肖
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

export interface diffDayInterface {
  (year: Ref<number>, month: Ref<number>): diffDayReturnInterface
}

export interface diffDayReturnInterface {
  lastMonthDay: ComputedRef<h[]>
  nextMonthDay: ComputedRef<h[]>
  changeLastMonth(): void
  changeNextMonth(): void
}

export interface holidayListItemInterface {
  title: string
}

export type holidayListType = Record<string, holidayListItemInterface>
