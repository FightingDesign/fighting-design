import { computed, watch, ref } from 'vue'
import { getDayMonth, Lunar } from '../../_utils'
import type { Ref, ComputedRef } from 'vue'
import type {
  UseCalculiTimeReturnInterface,
  UseCalculiTimeInterface,
  GetLunarDetailReturnInterface,
  OrdinaryFunctionInterface
} from './interface'

export const useCalculiTime: UseCalculiTimeInterface = (year: Ref<number>, month: Ref<number>): UseCalculiTimeReturnInterface => {

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
  const lastMonthDay: ComputedRef<GetLunarDetailReturnInterface[]> = computed((): GetLunarDetailReturnInterface[] => {
    // 上个月的天数
    let lastDays: number = getDayMonth(year.value, month.value - 1)
    // 需要展示的上个月信息
    const showLastListResult: GetLunarDetailReturnInterface[] = []

    for (let i = 0; i < firstDayWeek.value; i++) {
      const dayList: GetLunarDetailReturnInterface | -1 = lunar.getLunarDetail(year.value, month.value, lastDays)

      if (dayList !== -1) {
        showLastListResult.push(dayList)
      } else {
        showLastListResult.push({
          cDay: lastDays,
          cMonth: month.value
        } as unknown as GetLunarDetailReturnInterface)
      }

      lastDays--
    }

    // 倒序数组
    return showLastListResult.reverse()
  })

  // 下个月需要展示的天数
  const nextMonthDay: ComputedRef<GetLunarDetailReturnInterface[]> = computed((): GetLunarDetailReturnInterface[] => {
    // 获取当前月份的时间
    const thisMonthDay: number = getDayMonth(year.value, month.value) + firstDayWeek.value
    // 下个月需要展示的天数
    const nextShowDay: number = thisMonthDay % 7 === 0 ? 0 : 7 - (thisMonthDay % 7)

    if (!nextShowDay) {
      return []
    }

    const showNextListResult: GetLunarDetailReturnInterface[] = []

    for (let i = 0; i < nextShowDay; i++) {
      const dayList: GetLunarDetailReturnInterface | -1 = lunar.getLunarDetail(year.value, month.value + 2, i + 1)

      if (dayList !== -1) {
        showNextListResult.push(dayList)
      } else {
        showNextListResult.push({
          cDay: i + 1,
          cMonth: month.value + 2
        } as unknown as GetLunarDetailReturnInterface)
      }
    }

    return showNextListResult
  })

  // 当月需要展示的天数
  const currentMonthDay: ComputedRef<GetLunarDetailReturnInterface[]> = computed((): GetLunarDetailReturnInterface[] => {
    // 当月的时间
    const monthDays: number = getDayMonth(year.value, month.value)
    const showNextListResult: GetLunarDetailReturnInterface[] = []

    for (let i = 0; i < monthDays; i++) {
      const dayList: GetLunarDetailReturnInterface | -1 = lunar.getLunarDetail(year.value, month.value + 1, i + 1)

      if (dayList !== -1) {
        showNextListResult.push(dayList)
      } else {
        showNextListResult.push({
          cDay: i + 1,
          cMonth: month.value + 1
        } as unknown as GetLunarDetailReturnInterface)
      }
    }

    return showNextListResult
  })

  // 点击上个月切换按钮
  const changeLastMonth: OrdinaryFunctionInterface = (): void => {
    if (month.value > 0) {
      month.value--
      return
    }
    year.value--
    month.value = 11
  }

  // 点击下个月切换按钮
  const changeNextMonth: OrdinaryFunctionInterface = (): void => {
    if (month.value < 11) {
      month.value++
      return
    }
    year.value++
    month.value = 0
  }

  const AllMonthDays: ComputedRef<GetLunarDetailReturnInterface[]> = computed((): GetLunarDetailReturnInterface[] => {
    return [
      ...lastMonthDay.value,
      ...currentMonthDay.value,
      ...nextMonthDay.value
    ]
  })

  return {
    AllMonthDays,
    changeLastMonth,
    changeNextMonth
  } as UseCalculiTimeReturnInterface
}
