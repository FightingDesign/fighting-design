import type { WaterfallRowType, WaterfallType } from './interface'
import type { PropType } from 'vue'

export const Props = {
  list: {
    type: [] as PropType<WaterfallRowType[]>,
    default: (): [] => []
  },
  type: {
    type: String as PropType<WaterfallType>,
    default: (): string => 'flex'
  },
  cols: {
    type: Number,
    default: (): number => 2
  },
  minWidth: {
    type: Number,
    default: (): number => 0
  },
  wrapHeight: {
    type: String,
    default: (): string => 'auto'
  },
  rowGap: {
    type: String,
    default: (): string => '0px'
  },
  colGap: {
    type: String,
    default: (): string => '0px'
  },
  scrollAwait: {
    type: Number,
    default: (): number => 100
  }
} as const

export const Emits = {
  'scroll-end': (): void | null => null
} as const
