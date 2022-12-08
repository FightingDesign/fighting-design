import type { ComputedRef } from 'vue'
export type { GetLunarDetailReturnInterface } from '../../_utils/calendar-lunar/interface'

/**
 * 日历组件 hook 返回值类型接口
 *
 * @param AllMonthDays 当前月份展示的天数
 * @param changeLastMonth 上个月切换
 * @param changeNextMonth 下个月切换
 */
export interface UseCalculiTimeReturnInterface {
  AllMonthDays: ComputedRef<GetLunarDetailReturnInterface[]>
  changeLastMonth(): void
  changeNextMonth(): void
}
