import { computed } from 'vue'
import { dayMonth } from './utils'
import { lunarCalendar } from '../../_utils/lunar'

/**
 * 计算天数
 */
export const diffDay = (year: number, month: number) => {
  // 获取当前月份的 1号是周几
  const firstDayWeek: number = new Date(`${year}/${month + 1}/1`).getDay()

  // 上个月需要展示的天数
  const lastMonthDay = computed((): [] => {
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
  const nestMonthDay = computed(() => {
    // 获取当前月份的时间
    const thisMonthDay: number = dayMonth(year, month) + firstDayWeek
    // 下个月需要展示的天数
    const nestShowDay: number = 7 - thisMonthDay % 7

    if (!nestShowDay) {
      return []
    }

    const showNextListResult = []

    for (let i = 0; i < nestShowDay; i++) {
      const dayList = lunarCalendar.solar2lunar(
        year,
        month + 2,
        i + 1
      )
      showNextListResult.push(dayList)
    }

    return showNextListResult
  })

  // 获取当前月份多少天
  const currentMonthDay = computed(() => {
    return dayMonth(year, month)
  })

  return {
    lastMonthDay,
    nestMonthDay,
    currentMonthDay
  }
}
