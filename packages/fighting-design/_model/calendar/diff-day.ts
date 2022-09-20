import { computed, watch, ref } from 'vue'
import { dayMonth } from './utils'
import type { Ref, ComputedRef } from 'vue'
import type {
  getLunarDetailReturnInterface as a,
  diffDayReturnInterface,
  diffDayInterface
} from '../../_interface'
import { Lunar } from './lunar'

export const diffDay: diffDayInterface = (
  year: Ref<number>,
  month: Ref<number>
): diffDayReturnInterface => {

  // 获取当前月份的 1号是周几
  const firstDayWeek: Ref<number> = ref(
    new Date(`${year.value}/${month.value + 1}/1`).getDay()
  )
  const lunar: Lunar = new Lunar()

  watch(
    (): number => month.value,
    (newVal: number): void => {
      firstDayWeek.value = new Date(`${year.value}/${newVal + 1}/1`).getDay()
    }
  )

  // 上个月需要展示的天数
  const lastMonthDay: ComputedRef<a[]> = computed((): a[] => {
    // 上个月的天数
    let lastDays: number = dayMonth(year.value, month.value - 1)
    // 需要展示的上个月信息
    const showLastListResult: a[] = []

    for (let i = 0; i < firstDayWeek.value; i++) {
      const dayList: a = lunar.getLunarDetail(year.value, month.value, lastDays) as a
      showLastListResult.push(dayList)
      lastDays--
    }

    // 倒序数组
    return showLastListResult.reverse()
  })

  // 下个月需要展示的天数
  const nextMonthDay: ComputedRef<a[]> = computed((): a[] => {
    // 获取当前月份的时间
    const thisMonthDay: number = dayMonth(year.value, month.value) + firstDayWeek.value
    // 下个月需要展示的天数
    const nextShowDay: number = 7 - (thisMonthDay % 7)

    if (!nextShowDay) {
      return []
    }

    const showNextListResult: a[] = []

    for (let i = 0; i < nextShowDay; i++) {
      const dayList: a = lunar.getLunarDetail(year.value, month.value + 2, i + 1) as a
      showNextListResult.push(dayList)
    }

    return showNextListResult
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

  // 获取当前月份多少天
  const currentMonthDay: ComputedRef<number> = computed((): number => {
    return dayMonth(year.value, month.value)
  })

  return {
    lastMonthDay,
    nextMonthDay,
    changeLastMonth,
    changeNextMonth,
    currentMonthDay
  } as diffDayReturnInterface
}
