import type { ComputedRef } from 'vue'
import type { GetLunarDetailReturn } from '../../_utils'

/**
 * 日历组件 hook 返回值类型接口
 *
 * @param AllMonthDays 当前月份展示的天数
 * @param changeLastMonth 上个月切换
 * @param changeNextMonth 下个月切换
 */
export interface UseCalculiTimeReturn {
  AllMonthDays: ComputedRef<GetLunarDetailReturn[]>
  changeLastMonth: () => void
  changeNextMonth: () => void
}
