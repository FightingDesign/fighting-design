/**
 * 获取每个月有多少天
 * @param year 年份
 * @param month 月份
 * @returns 
 */
export const dayMonth = (year: number, month: number): number => {
  if (month === -1) {
    return 31
  }
  if (month !== 1) {
    const months = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] as const
    return months[month]
  }
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 29 : 28
}
