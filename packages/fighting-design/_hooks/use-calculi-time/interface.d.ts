import type { Ref, ComputedRef } from 'vue'
export type { OrdinaryFunctionInterface } from '../../_interface'
export type { GetLunarDetailReturnInterface } from '../../_utils/calendar-lunar/interface'

/**
 * 日历组件 hook 类型接口
 *
 * 传入年份和月份的 ref 响应式数据
 *
 * @param year 年分响应式数据
 * @param month 月份响应式数据
 * @returns { UseCalculiTimeInterface } 当前月份展示的天数、上个月切换、下个月切换
 * 
 */
export interface UseCalculiTimeInterface {
  (year: Ref<number>, month: Ref<number>): DiffDayReturnInterface
}

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
