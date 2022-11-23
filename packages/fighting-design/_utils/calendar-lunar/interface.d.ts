/**
 * Lunar 类返回值类型接口
 *
 * @param animal 生肖
 * @param IDayCn 农历日期
 * @param IMonthCn 当前月份
 * @param Term
 * @param constellation 星座
 * @param cDay
 * @param cMonth
 * @param cYear
 * @param date
 * @param festival 节日
 * @param gzDay
 * @param gzMonth
 * @param gzYear
 * @param isLeap
 * @param isTerm
 * @param isToday
 * @param lDay
 * @param lMonth
 * @param lYear
 * @param lunarDate
 * @param lunarFestival
 * @param nWeek
 * @param ncWeek 星期
 */
export interface GetLunarDetailReturnInterface {
  animal: string
  IDayCn: string
  IMonthCn: string
  Term: string | null
  constellation: string
  cDay: number
  cMonth: number
  cYear: number
  date: string
  festival: string
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
  lunarFestival: string
  nWeek: number
  ncWeek: string
}

/**
 * Lunar 类的类型接口
 *
 * @param getLunarYearDays
 * @param leapMonth
 * @param leapDays
 * @param monthDays
 * @param toGanZhiYear
 * @param toConstellation
 * @param toGanZhi
 * @param getTerm
 * @param toChinaMonth
 * @param toChinaDay
 * @param getAnimal
 * @param getLunarDetail
 */
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
  getLunarDetail(
    yPara: number,
    mPara: number,
    dPara: number
  ): -1 | GetLunarDetailReturnInterface
}
