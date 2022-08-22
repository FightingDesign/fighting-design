import { PropType } from 'vue'
import { SizeSkeletion } from './interface.d'

export const Props = {
  rounded: {
    type: Boolean,
    default: false
  },
  animated: {
    type: Boolean,
    default: false
  },
  circled: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: 1
  },
  loading: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<SizeSkeletion>,
    default: SizeSkeletion.DEFAULT
  }
} as const

export const Emits = {} as const
