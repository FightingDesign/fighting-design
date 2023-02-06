import { computed, watch, ref } from 'vue'
import { useLunar } from '..'
import type { GetLunarDetailReturn } from '..'
import type { UseCalendarReturn } from './interface'

export * from './interface.d'

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
export const useCalendar = (params: { year: number; month: number; date: number; }): UseCalendarReturn => {
  /**
   * 获取每个月有多少天
   *
   * @param { number } year 年份
   * @param { number } month 月份
   * @returns { number } 当前月份的天数
   */
  const getDayMonth = (year: number, month: number): number => {
    if (month === -1) return 31

    /** 如果不是 2 月份，则返回指定的时间 */
    if (month !== 2) {
      const months = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] as const
      return months[month - 1]
    }

    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 29 : 28
  }

  /** 
   * 获取当前月份的 1号是周几
   * 
   * 用于添加上个月的剩余天数显示
   */
  const firstDayWeek = ref(new Date(`${params.year}/${params.month}/1`).getDay())

  /** 初始化农历类 */
  const getLunarDetail = useLunar()

  /** 监视月份 如果月份改变，则重新渲染当然月份的 */
  watch(
    (): number => params.month,
    (newVal: number): void => {
      firstDayWeek.value = new Date(`${params.year}/${newVal}/1`).getDay()
    }
  )

  /** 上个月需要展示的天数 */
  const lastMonthDay = computed((): GetLunarDetailReturn[] => {

    /** 上个月的天数 */
    let lastDays: number = getDayMonth(params.year, params.month - 1)

    /** 需要展示的上个月信息 */
    const showLastListResult = []

    for (let i = 0; i < firstDayWeek.value; i++) {
      /** 获取到剩余天数每天的详细信息 */
      const dayList: GetLunarDetailReturn | -1 = getLunarDetail(params.year, params.month - 1, lastDays - firstDayWeek.value)

      if (dayList !== -1) {
        showLastListResult.push(dayList)
      } else {
        showLastListResult.push({
          cDay: lastDays,
          cMonth: params.month
        })
      }

      lastDays++
    }

    return showLastListResult as GetLunarDetailReturn[]
  })

  /** 下个月需要展示的天数 */
  const nextMonthDay = computed((): GetLunarDetailReturn[] => {
    /** 
     * 获取当前月份之前展示的时间数量
     * 
     * 当前月份时间 + 上个月展示的时间数量
     */
    const previousMonthDay: number = getDayMonth(params.year, params.month) + firstDayWeek.value

    /** 下个月需要展示的天数 */
    const nextShowDay: number = previousMonthDay % 7 === 0 ? 0 : 7 - (previousMonthDay % 7)

    /** 如果为假，则说明下个月不需要展示天数 */
    if (!nextShowDay) return []

    /** 需要展示的天数集合 */
    const showNextListResult = []

    for (let i = 0; i < nextShowDay; i++) {
      /** 获取到剩余天数每天的详细信息 */
      const dayList: GetLunarDetailReturn | -1 = getLunarDetail(params.year, params.month + 1, i + 1)

      if (dayList !== -1) {
        showNextListResult.push(dayList)
      } else {
        showNextListResult.push({
          cDay: i + 1,
          cMonth: params.month + 2
        })
      }
    }

    return showNextListResult as GetLunarDetailReturn[]
  })

  /** 当月需要展示的天数 */
  const currentMonthDay = computed((): GetLunarDetailReturn[] => {
    /** 当月的时间 */
    const monthDays: number = getDayMonth(params.year, params.month)
    const showNextListResult = []

    for (let i = 0; i < monthDays; i++) {
      const dayList: GetLunarDetailReturn | -1 = getLunarDetail(params.year, params.month, i + 1)

      if (dayList !== -1) {
        showNextListResult.push(dayList)
      } else {
        showNextListResult.push({
          cDay: i + 1,
          cMonth: params.month
        })
      }
    }

    return showNextListResult as GetLunarDetailReturn[]
  })

  /** 点击上个月切换按钮 */
  const changeLastMonth = (): void => {
    if (params.month > 1) {
      params.month--
      return
    }
    params.year--
    params.month = 12
  }

  /** 点击下个月切换按钮 */
  const changeNextMonth = (): void => {
    if (params.month < 12) {
      params.month++
      return
    }
    params.year++
    params.month = 1
  }

  /**
   * 当前月份展示的时间
   *
   * 包括上个月需要展示的日期和下个月需要展示的日期
   */
  const AllMonthDays = computed((): GetLunarDetailReturn[] => {
    return [...lastMonthDay.value, ...currentMonthDay.value, ...nextMonthDay.value]
  })

  return {
    AllMonthDays,
    changeLastMonth,
    changeNextMonth
  }
}
