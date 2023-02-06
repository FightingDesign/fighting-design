/**
 * Lunar 类返回值类型接口
 *
 * @param { string } animal 生肖
 * @param { string } IDayCn 农历日期
 * @param { string } IMonthCn 当前月份
 * @param { string | null } Term 节气
 * @param { string } constellation 星座
 * @param { number } cDay 阳历日期
 * @param { number } cMonth 阳历月份
 * @param { number } cYear 阳历年份
 * @param { string } date 详细日期 yyyy-mm-dd
 * @param { string } festival 阳历节日
 * @param { string } gzDay 纪日
 * @param { string } gzMonth 纪月
 * @param { string } gzYear 纪年
 * @param { boolean } isLeap 是否为闰月
 * @param { boolean } lDay 农历日期
 * @param { number } lMonth 农历月份
 * @param { number } lYear 农历年份
 * @param { string } lunarDate 详细农历日期 yyyy-mm-dd
 * @param { string } lunarFestival 农历节日
 * @param { number } nWeek 小写星期
 */
export interface GetLunarDetailReturn {
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
  lDay: number
  lMonth: number
  lYear: number
  lunarDate: string
  lunarFestival: string
  nWeek: number
}

/**
 * useLunar 返回值类型
 */
export type UseLunarReturn = (yPara: number, mPara: number, dPara: number) => -1 | GetLunarDetailReturn
