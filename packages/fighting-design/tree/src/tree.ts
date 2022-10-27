import type { PropType } from 'vue'
import type { TreeDataInterface } from './interface'

export const Props = {
  data: {
    type: Array as PropType<TreeDataInterface>,
    default: (): [] => []
  }
} as const

export const Emits = {} as const
