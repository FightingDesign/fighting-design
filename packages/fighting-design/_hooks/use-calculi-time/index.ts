import { computed, watch, ref } from 'vue'
import { getDayMonth, Lunar } from '../../_utils'
import type { Ref, ComputedRef } from 'vue'
import type { GetLunarDetailReturn } from '../../_utils'
import type { UseCalculiTimeReturn } from './interface'

export * from './interface.d'

/**
 * 日历组件 hook
 *
 * @param year 年分响应式数据
 * @param month 月份响应式数据
 * @returns 当前月份展示的天数、上个月切换、下个月切换
 */
export const useCalculiTime = (year: Ref<number>, month: Ref<number>): UseCalculiTimeReturn => {
  /**
   * 获取当前月份的 1号是周几
   */
  const firstDayWeek: Ref<number> = ref(new Date(`${year.value}/${month.value + 1}/1`).getDay())

  /**
   * 初始化农历类
   */
  const lunar: Lunar = new Lunar()

  /**
   * 监视月份
   * 如果月份改变，则重新渲染当然月份的
   */
  watch(
    (): number => month.value,
    (newVal: number): void => {
      firstDayWeek.value = new Date(`${year.value}/${newVal + 1}/1`).getDay()
    }
  )

  /**
   * 上个月需要展示的天数
   */
  const lastMonthDay: ComputedRef<GetLunarDetailReturn[]> = computed((): GetLunarDetailReturn[] => {
    // 上个月的天数
    let lastDays: number = getDayMonth(year.value, month.value - 1)
    // 需要展示的上个月信息
    const showLastListResult: GetLunarDetailReturn[] = []

    for (let i = 0; i < firstDayWeek.value; i++) {
      const dayList: GetLunarDetailReturn | -1 = lunar.getLunarDetail(year.value, month.value, lastDays)

      if (dayList !== -1) {
        showLastListResult.push(dayList)
      } else {
        showLastListResult.push({
          cDay: lastDays,
          cMonth: month.value
        } as unknown as GetLunarDetailReturn)
      }

      lastDays--
    }

    // 倒序数组
    return showLastListResult.reverse()
  })

  /**
   * 下个月需要展示的天数
   */
  const nextMonthDay: ComputedRef<GetLunarDetailReturn[]> = computed((): GetLunarDetailReturn[] => {
    // 获取当前月份的时间
    const thisMonthDay: number = getDayMonth(year.value, month.value) + firstDayWeek.value
    // 下个月需要展示的天数
    const nextShowDay: number = thisMonthDay % 7 === 0 ? 0 : 7 - (thisMonthDay % 7)

    if (!nextShowDay) {
      return []
    }

    const showNextListResult: GetLunarDetailReturn[] = []

    for (let i = 0; i < nextShowDay; i++) {
      const dayList: GetLunarDetailReturn | -1 = lunar.getLunarDetail(year.value, month.value + 2, i + 1)

      if (dayList !== -1) {
        showNextListResult.push(dayList)
      } else {
        showNextListResult.push({
          cDay: i + 1,
          cMonth: month.value + 2
        } as unknown as GetLunarDetailReturn)
      }
    }

    return showNextListResult
  })

  /**
   * 当月需要展示的天数
   */
  const currentMonthDay: ComputedRef<GetLunarDetailReturn[]> = computed((): GetLunarDetailReturn[] => {
    // 当月的时间
    const monthDays: number = getDayMonth(year.value, month.value)
    const showNextListResult: GetLunarDetailReturn[] = []

    for (let i = 0; i < monthDays; i++) {
      const dayList: GetLunarDetailReturn | -1 = lunar.getLunarDetail(year.value, month.value + 1, i + 1)

      if (dayList !== -1) {
        showNextListResult.push(dayList)
      } else {
        showNextListResult.push({
          cDay: i + 1,
          cMonth: month.value + 1
        } as unknown as GetLunarDetailReturn)
      }
    }

    return showNextListResult
  })

  /**
   * 点击上个月切换按钮
   */
  const changeLastMonth = (): void => {
    if (month.value > 0) {
      month.value--
      return
    }
    year.value--
    month.value = 11
  }

  /**
   * 点击下个月切换按钮
   */
  const changeNextMonth = (): void => {
    if (month.value < 11) {
      month.value++
      return
    }
    year.value++
    month.value = 0
  }

  /**
   * 当前月份展示的时间
   * 包括上个月需要展示的日期和下个月需要展示的日期
   */
  const AllMonthDays: ComputedRef<GetLunarDetailReturn[]> = computed((): GetLunarDetailReturn[] => {
    return [...lastMonthDay.value, ...currentMonthDay.value, ...nextMonthDay.value]
  })

  return {
    AllMonthDays,
    changeLastMonth,
    changeNextMonth
  }
}
