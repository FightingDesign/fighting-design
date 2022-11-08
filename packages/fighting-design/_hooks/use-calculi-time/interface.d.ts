import type { Ref, ComputedRef } from 'vue'
export type { OrdinaryFunctionInterface } from '../../_interface'
export type { GetLunarDetailReturnInterface } from '../../_utils/calendar-lunar/interface'

/**
 * 日历组件 hook 返回值类型接口
 * 
 * AllMonthDays 当前月份展示的天数
 * 
 * changeLastMonth 上个月切换
 * 
 * changeNextMonth 下个月切换
 */
export interface UseCalculiTimeReturnInterface {
  AllMonthDays: ComputedRef<GetLunarDetailReturnInterface[]>
  changeLastMonth(): void
  changeNextMonth(): void
}

/**
 * 日历组件 hook 类型接口
 * 
 * 传入年份和月份的 ref 响应式数据
 * 
 * 返回 UseCalculiTimeReturnInterface 类型对象
 */
export interface UseCalculiTimeInterface {
  (year: Ref<number>, month: Ref<number>): DiffDayReturnInterface
}
