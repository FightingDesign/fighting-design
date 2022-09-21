import type { PropType } from 'vue'
import type { treeDataInterface } from './interface'

export const Props = {
  data: {
    type: Array as PropType<treeDataInterface[]>,
    default: (): [] => []
  }
} as const

export const Emits = {} as const
