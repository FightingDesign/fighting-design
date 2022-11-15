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
  festival: string // 节日
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

export interface LunarInterface {
  getLunarYearDays(year: number): number
  leapMonth(year: number): number
  leapDays(year: number): number
  monthDays(year: number, month: number): number
  toGanZhiYear(lYear: number): string
  toConstellation(cMonth: number, cDay: number): string
  toGanZhi(offset: number): string
  getTerm(year: number, n: number): number
  toChinaMonth(month: number): string | -1
  toChinaDay(day: number): string
  getAnimal(year: number): string
  getLunarDetail(yPara: number, mPara: number, dPara: number): -1 | GetLunarDetailReturnInterface
}
