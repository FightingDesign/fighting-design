import { computed } from 'vue'
import { useLunar } from '..'
import type { GetLunarDetailReturn } from '..'
import type { ComputedRef } from 'vue'

/**
 * 日历组件 hook 返回值类型接口
 *
 * @param { Object } AllMonthDays 当前月份展示的天数
 * @param { Function } changeLastMonth 上个月切换
 * @param { Function } changeNextMonth 下个月切换
 */
export interface UseCalendarReturn {
  AllMonthDays: ComputedRef<GetLunarDetailReturn[]>
  changeLastMonth: () => void
  changeNextMonth: () => void
}

/**
 * 日历组件方法封装
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } params 日期对象
 * @param { number } params.year 年份
 * @param { number } params.month 月份
 * @param { number } params.date 日期
 * @returns { Object } 当前月份展示的天数、上个月切换、下个月切换
 */
export const useCalendar = (): UseCalendarReturn => {
  // 获取指定月份的天数
  const getDaysInMonth = (year: number, month: number): number => {
    const daysInMonth = [
      31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ]

    // 如果是闰年，二月份有29天
    if (month === 2 && isLeapYear(year)) {
      return 29
    }

    return daysInMonth[month]
  }

  // 判断是否为闰年
  const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
  }

  // 生成日历数组
  const generateCalendar = (year: number, month: number, startDay: number): {
    day: number
    isCurrentMonth: boolean
  }[] => {
    const calendar = []
    let currentDay = 1

    // 获取上个月的天数
    const previousMonth = month === 0 ? 11 : month - 1
    const daysInPreviousMonth = getDaysInMonth(year, previousMonth)

    // 填充上个月的剩余天数
    for (let i = startDay - 1; i >= 0; i--) {
      calendar.push({
        day: daysInPreviousMonth - i,
        isCurrentMonth: false
      })
    }

    // 填充当前月份的天数
    while (currentDay <= getDaysInMonth(year, month)) {
      calendar.push({
        day: currentDay,
        isCurrentMonth: true
      })
      currentDay++
    }

    // 补充下个月的日期
    let nextMonthDay = 1
    while (calendar.length % 7 !== 0) {
      calendar.push({
        day: nextMonthDay,
        isCurrentMonth: false
      });
      nextMonthDay++
    }

    return calendar
  }

  return {
    generateCalendar
  }
}
