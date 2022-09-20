import type { PropType } from 'vue'

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
    default: (): string => ''
  },
  dayCellHeight: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  weekCellHeight: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  }
} as const
