/**
 * 获取每个月有多少天方法类型接口
 *
 * @param year 年份
 * @param month 月份
 * @returns { Number } 当前月份的天数
 */
export interface GetDayMonthInterface {
  (year: number, month: number): number
}
