import type { imageListType } from './interface'
import type { PropType } from 'vue'

export const Props = {
  imageList: {
    type: Array as PropType<imageListType>,
    default: (): imageListType => []
  },
  round: {
    type: [Boolean, Number] as PropType<boolean | number>,
    default: (): boolean => true
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
