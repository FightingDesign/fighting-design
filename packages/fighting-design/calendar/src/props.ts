import type { PropType, ExtractPropTypes } from 'vue'
import type { CalendarChange, CalendarMemorandum } from './interface'

export const Props = {
  /** 绑定日期 */
  date: {
    type: Date,
    default: (): Date => new Date(),
    required: true
  },
  /** 是否显示农历或节日，仅支持 1900 ~ 2100 */
  lunar: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 是否显示头部 */
  showHeader: {
    type: Boolean,
    default: (): boolean => true
  },
  /** 是否显示边框 */
  border: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 自定义边框颜色 */
  borderColor: {
    type: String,
    default: (): null => null
  },
  /** 日期单元格高度 */
  dayCellHeight: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 星期单元格高度 */
  weekCellHeight: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 备忘事件 */
  memorandum: {
    type: Object as PropType<CalendarMemorandum>,
    default: (): null => null
  },
  /** 月份改变时触发的回调 */
  onChangeDate: {
    type: Function as PropType<CalendarChange>,
    default: (): null => null
  },
  /** 日期改变时触发的回调 */
  onChangeMonth: {
    type: Function as PropType<CalendarChange>,
    default: (): null => null
  }
} as const

export type CalendarProps = ExtractPropTypes<typeof Props>
