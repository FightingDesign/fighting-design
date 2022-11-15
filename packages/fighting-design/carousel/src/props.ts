import type { CheckboxLabelType } from './interface'

export const Props = {
  duration: {
    type: Number,
    default: (): number => 2000
  },
  autoPlay: {
    type: String,
    default: (): string => ''
  },
  data: {
    type: Array,
    default: (): [] => []
  }
} as const

export const Emits = {} as const
