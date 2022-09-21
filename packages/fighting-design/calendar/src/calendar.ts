import type { PropType } from 'vue'
import type { calendarEmitInterface, memorandumType } from './interface'

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
  showFooter: {
    type: Boolean,
    default: (): boolean => false
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
    type: Object as PropType<memorandumType>,
    default: (): null => null
  }
} as const

export const Emits = {
  'change-date': (date: calendarEmitInterface): calendarEmitInterface => date,
  'change-switch': (date: calendarEmitInterface): calendarEmitInterface => date
} as const
