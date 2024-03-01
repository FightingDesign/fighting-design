import { useLunar } from '..'
import type { CalendarProps } from '../../calendar'

export interface GenerateCalendarItem {
  year: number
  month: number
  day: number
  target: 'prev' | 'next' | 'current'
  lunarFestival?: string
  festival?: string
  term?: string
  lunar?: string
  constellation?: string
}

/**
 * 日历组件 hook 返回值类型接口
 *
 * @param { Function } generateCalendar 日期集合
 */
export interface UseCalendarReturn {
  generateCalendar: (year: number, month: number) => GenerateCalendarItem[]
}

/**
 * 日历组件方法封装
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 */
export const useCalendar = (prop: CalendarProps): UseCalendarReturn => {
  /** 获取农历和节日算法 */
  const lunar = useLunar()

  /**
   * 获取指定月份的天数
   *
   * @param { number } year 年份
   * @param { number } month 月份
   */
  const getDaysInMonth = (year: number, month: number): number => {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (month - 1 === -1) {
      month = 12
    }

    // 如果是闰年，二月份有29天
    if (month === 2 && isLeapYear(year)) {
      return 29
    }

    return daysInMonth[month - 1]
  }

  /**
   * 获取指定年份指定月份的 1号是星期几
   *
   * @param { number } year 年份
   * @param { number } month 月份
   */
  const getFirstDayOfWeek = (year: number, month: number): number => {
    /**
     * 创建一个表示给定年份和月份的 Date 对象
     *
     * 月份要减 1，因为月份是从 0 开始计数的
     */
    const firstDay = new Date(year, month - 1, 1) //

    /** 获取当前月份1号是星期几，0 表示星期日，1 表示星期一，以此类推 */
    const dayOfWeek = firstDay.getDay()

    return dayOfWeek
  }

  /**
   * 判断是否为闰年
   *
   * @param { number } year 年份
   */
  const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  }

  /**
   * 生成日历数组
   *
   * @param { number } year 年份
   * @param { number } month 月份
   */
  const generateCalendar = (year: number, month: number): GenerateCalendarItem[] => {
    /** 日历详情 */
    const calendar: GenerateCalendarItem[] = []

    /** 获取开始日期是星期几 */
    const startDay = getFirstDayOfWeek(year, month)

    /** 获取上个月天数 */
    const lastMonthDays = getDaysInMonth(year, month - 1)

    // 填充上个月的剩余天数
    for (let i = startDay - 1; i >= 0; i--) {
      const _month = month - 1 === 0 ? 12 : month - 1
      const _day = lastMonthDays - i
      const _lunar = prop.lunar ? lunar(year, _month, _day) : {}

      calendar.push({
        year,
        month: _month,
        day: _day,
        target: 'prev',
        ..._lunar
      } as const)
    }

    let currentDay = 1

    // 填充当前月份的天数
    while (currentDay <= getDaysInMonth(year, month)) {
      const _lunar = prop.lunar ? lunar(year, month, currentDay) : {}

      calendar.push({
        year,
        month,
        day: currentDay,
        target: 'current',
        ..._lunar
      } as const)

      currentDay++
    }

    /** 补充下个月的日期 */
    let nextMonthDay = 1

    while (calendar.length % 7 !== 0) {
      const _month = month + 1 === 13 ? 1 : month + 1
      const _lunar = prop.lunar ? lunar(year, _month, nextMonthDay) : {}

      calendar.push({
        year,
        month: _month,
        day: nextMonthDay,
        target: 'next',
        ..._lunar
      } as const)

      nextMonthDay++
    }

    return calendar
  }

  return { generateCalendar }
}
