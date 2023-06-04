import {
  setBooleanProp,
  setStringNumberProp,
  setStringProp,
  setFunctionProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { CalendarChange } from './interface'

export const Props = {
  /** 绑定日期 */
  date: {
    type: Date,
    default: (): Date => new Date(),
    required: true
  },
  /** 是否显示农历或节日，仅支持 1900 ~ 2100 */
  lunar: setBooleanProp(),
  /** 是否显示头部 */
  showHeader: setBooleanProp(true),
  /** 是否显示边框 */
  border: setBooleanProp(),
  /** 自定义边框颜色 */
  borderColor: setStringProp(),
  /** 日期单元格高度 */
  dayCellHeight: setStringNumberProp(),
  /** 星期单元格高度 */
  weekCellHeight: setStringNumberProp(),
  /** 日期改变时触发的回调 */
  onChange: setFunctionProp<CalendarChange>(),
  /** 月份改变时触发的回调 */
  onChangeDate: setFunctionProp<CalendarChange>(),
  /** 日期改变时触发的回调 */
  onChangeMonth: setFunctionProp<CalendarChange>()
} as const

/** calender 组件 props 类型 */
export type CalendarProps = ExtractPropTypes<typeof Props>
