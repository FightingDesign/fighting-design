import type { PropType, ExtractPropTypes } from 'vue'
import type { CalendarCallbackInterface, CalendarMemorandumType } from './interface'

export const Props = {
  date: {
    type: Date,
    default: (): Date => new Date,
    required: true
  },
  lunar: {
    type: Boolean,
    default: (): boolean => false
  },
  showHeader: {
    type: Boolean,
    default: (): boolean => true
  },
  border: {
    type: Boolean,
    default: (): boolean => false
  },
  borderColor: {
    type: String,
    default: (): string => '#eee'
  },
  dayCellHeight: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '85px'
  },
  weekCellHeight: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '50px'
  },
  memorandum: {
    type: Object as PropType<CalendarMemorandumType>,
    default: (): null => null
  },
  changeDate: {
    type: Function as PropType<CalendarCallbackInterface>,
    default: (): null => null
  },
  changeSwitch: {
    type: Function as PropType<CalendarCallbackInterface>,
    default: (): null => null
  }
} as const

export type CalendarPropsType = ExtractPropTypes<typeof Props>
