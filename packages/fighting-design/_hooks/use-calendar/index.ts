// import { computed } from 'vue'
// import { useLunar } from '..'
// import type { GetLunarDetailReturn } from '..'
// import type { ComputedRef } from 'vue'

export interface GenerateCalendarItem {
  year: number
  month: number
  day: number
  isCurrentMonth: boolean
  isToday: boolean
  target: 'prev' | 'next' | 'current'
}

/**
 * 日历组件 hook 返回值类型接口
 *
 * @param { Function } generateCalendar 日期集合
 */
export interface UseCalendarReturn {
  generateCalendar: (year: number, month: number, date: number) => GenerateCalendarItem[]
}

/**
 * 日历组件方法封装
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @returns
 */
export const useCalendar = (): UseCalendarReturn => {
  // 获取指定月份的天数
  const getDaysInMonth = (year: number, month: number): number => {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    // 如果是闰年，二月份有29天
    if (month === 2 && isLeapYear(year)) {
      return 29
    }

    return daysInMonth[month - 1]
  }

  const getFirstDayOfWeek = (year: number, month: number): number => {
    // 创建一个表示给定年份和月份的 Date 对象
    const firstDay = new Date(year, month - 1, 1) // 月份要减 1，因为月份是从 0 开始计数的

    // 获取当前月份1号是星期几，0 表示星期日，1 表示星期一，以此类推
    const dayOfWeek = firstDay.getDay()

    return dayOfWeek
  }

  // 判断是否为闰年
  const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
  }

  // 生成日历数组
  const generateCalendar = (year: number, month: number, date: number): GenerateCalendarItem[] => {
    const calendar = []

    const startDay = getFirstDayOfWeek(year, month)

    /** 获取当前月份的天数 */
    const daysInPreviousMonth = getDaysInMonth(year, month)

    /** 填充上个月的剩余天数 */
    for (let i = startDay - 1; i >= 0; i--) {
      calendar.push({
        year,
        month: month - 1 === 0 ? 12 : month - 1,
        day: daysInPreviousMonth - i,
        isCurrentMonth: false,
        isToday: false,
        target: 'prev'
      } as const)
    }

    let currentDay = 1

    /** 填充当前月份的天数 */
    while (currentDay <= getDaysInMonth(year, month)) {
      calendar.push({
        year,
        month,
        day: currentDay,
        isCurrentMonth: true,
        isToday: currentDay === date,
        target: 'current'
      } as const)

      currentDay++
    }

    /** 补充下个月的日期 */
    let nextMonthDay = 1

    while (calendar.length % 7 !== 0) {
      calendar.push({
        year,
        month: month + 1 === 13 ? 1 : month + 1,
        day: nextMonthDay,
        isCurrentMonth: false,
        isToday: false,
        target: 'next'
      } as const)

      nextMonthDay++
    }

    return calendar
  }

  return {
    generateCalendar
  }
}
