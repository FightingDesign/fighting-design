import { computed } from 'vue'
import { dayMonth } from './utils'
import { lunarCalendar } from '../../_utils/lunar'

/**
 * 计算天数
 */
export const diffDay = (year: number, month: number) => {

  // 上个月需要展示的天数
  const lastMonthDay = computed((): number => {
    // 获取当前月份的 1号是周几
    const firstDayWeek: number = new Date(`${year}/${month + 1}/1`).getDay()
    // 上个月的天数
    let lastDays: number = dayMonth(year, month - 1)
    // 需要展示的上个月信息
    const showLastListResult = []

    for (let i = 0; i < firstDayWeek; i++) {
      const dayList = lunarCalendar.solar2lunar(
        year,
        month - 1,
        lastDays
      )
      showLastListResult.push(dayList)
      lastDays--
    }

    return showLastListResult.reverse()
  })

  // 下个月需要展示的天数
  // const nestMonthDay = 

  return {
    lastMonthDay
  }
}
