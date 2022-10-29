import type { waterfallRowType as rt } from './interface'
import type { PropType } from 'vue'
export const Props = {
  list: {
    type: [] as PropType<rt[]>,
    default: () => []
  },
  cols: {
    type: Number,
    default: () => 2
  },
  minWidth: {
    type: Number,
    default: () => 200
  },
  rowGap: {
    type: String,
    default: () => '0px'
  },
  colGap: {
    type: String,
    default: () => '0px'
  }
} as const

export const Emits = {
  'scroll-end': (): void | null => null
} as const
