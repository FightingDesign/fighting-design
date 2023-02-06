import type { ComputedRef } from 'vue'
import type { GetLunarDetailReturn } from '..'

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
