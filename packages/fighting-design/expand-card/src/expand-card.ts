import type { imageListInterface } from './interface'
import type { PropType } from 'vue'

export const Props = {
  imageList: {
    type: Array as PropType<imageListInterface[] | string[]>,
    default: (): string[] => []
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  expandIndex: {
    type: Number,
    default: (): number => 0
  },
  color: {
    type: String,
    default: (): string => '#fff'
  }
} as const
