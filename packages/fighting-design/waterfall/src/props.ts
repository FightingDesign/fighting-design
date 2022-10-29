import type { WaterfallRowType } from './interface'
import type { PropType } from 'vue'

export const Props = {
  list: {
    type: [] as PropType<WaterfallRowType[]>,
    default: (): [] => []
  },
  cols: {
    type: Number,
    default: (): number => 2
  },
  minWidth: {
    type: Number,
    default: (): number => 200
  },
  rowGap: {
    type: String,
    default: (): string => '0px'
  },
  colGap: {
    type: String,
    default: (): string => '0px'
  }
} as const

export const Emits = {
  'scroll-end': (): void | null => null
} as const
