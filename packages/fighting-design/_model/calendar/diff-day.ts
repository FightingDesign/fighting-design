import { computed, ref, watch } from 'vue'
import { dayMonth } from './utils'
import { lunarCalendar } from '../../_utils/lunar'
import type { Ref } from 'vue'

/**
 * 计算天数
 */
// export const diffDay = (year: number, month: number) => {
export const diffDay = (date: Date) => {

  // console.log(year, month)
  const year: Ref<number> = ref<number>(date.getFullYear())
  const month: Ref<number> = ref<number>(date.getMonth())
  // 获取当前月份的 1号是周几
  const firstDayWeek = ref<number>(new Date(`${year.value}/${month.value + 1}/1`).getDay())

  watch(
    () => month.value,
    (newVal: number): void => {
      console.log(newVal)
      firstDayWeek.value = new Date(`${year.value}/${newVal}/1`).getDay()
    }
  )

  // 上个月需要展示的天数
  const lastMonthDay = computed((): [] => {
    // 上个月的天数
    let lastDays: number = dayMonth(year.value, month.value - 1)
    // 需要展示的上个月信息
    const showLastListResult = []

    for (let i = 0; i < firstDayWeek.value; i++) {
      const dayList = lunarCalendar.solar2lunar(
        year.value,
        month.value - 1,
        lastDays
      )
      showLastListResult.push(dayList)
      lastDays--
    }

    return showLastListResult.reverse()
  })

  // 下个月需要展示的天数
  const nextMonthDay = computed(() => {
    // 获取当前月份的时间
    const thisMonthDay: number = dayMonth(year.value, month.value) + firstDayWeek.value
    // 下个月需要展示的天数
    const nextShowDay: number = 7 - thisMonthDay % 7

    if (!nextShowDay) {
      return []
    }

    const showNextListResult = []

    for (let i = 0; i < nextShowDay; i++) {
      const dayList = lunarCalendar.solar2lunar(
        year.value,
        month.value + 2,
        i + 1
      )
      showNextListResult.push(dayList)
    }

    return showNextListResult
  })

  // 获取当前月份多少天
  const currentMonthDay = computed(() => {
    return dayMonth(year.value, month.value)
  })

  // 点击上个月切换按钮
  const changeLastMonth = (): void => {
    if (month.value > 0) {
      month.value--
      return
    }
    year.value--
    month.value = 11
  }

  // 点击下个月切换按钮
  const changeNextMonth = (): void => {
    if (month.value < 11) {
      month.value++
      return
    }
    year.value++
    month.value = 0
  }

  return {
    lastMonthDay,
    nextMonthDay,
    currentMonthDay,
    changeLastMonth,
    changeNextMonth
  }
}
