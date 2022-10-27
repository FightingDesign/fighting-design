import type { PropType } from 'vue'
import type { ExpandCardImageListType } from './interface'

export const Props = {
  imageList: {
    type: Array as PropType<ExpandCardImageListType>,
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
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  }
} as const
