import type { PropType } from 'vue'
import type { dataInterface } from './interface'

export const Props = {
  data: {
    type: Array as PropType<dataInterface[]>,
    default: (): [] => []
  }
} as const

export const Emits = {} as const
