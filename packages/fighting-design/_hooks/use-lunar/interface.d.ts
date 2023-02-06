/**
 * Lunar 类返回值类型接口
 *
 * @param { string } festival 阳历节日
 * @param { string } lunarFestival 农历节日
 * @param { string } animal 生肖
 * @param { string } IDayCn 农历日期
 * @param { number } year 阳历年份
 * @param { number } month 阳历月份
 * @param { number } day 阳历日期
 * @param { string } term 节气
 * @param { string } constellation 星座
 */
export interface GetLunarDetailReturn {
  festival: string
  lunarFestival: string
  animal: string
  IDayCn: string
  year: number
  month: number
  day: number
  week: number
  term: string | null
  constellation: string
}

/**
 * useLunar 返回值类型
 */
export type UseLunarReturn = (yPara: number, mPara: number, dPara: number) => -1 | GetLunarDetailReturn
