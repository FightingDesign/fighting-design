import type { PropType } from 'vue'
import type { ProgressType } from './interface'

export const Props = {
  percentage: {
    type: Number,
    default: 0,
    validator: (val: number): boolean => val >= 0 && val <= 100
  },
  type: {
    type: String as PropType<ProgressType>,
    default: (): ProgressType => 'primary',
    validator: (val: ProgressType): boolean => {
      return (['primary', 'success', 'danger', 'warning'] as const).includes(
        val
      )
    }
  },
  square: {
    type: Boolean,
    default: false
  },
  linear: {
    type: Boolean,
    default: false
  },
  showText: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: ''
  },
  background: {
    type: String,
    default: ''
  },
  width: {
    type: Number,
    default: 240
  },
  height: {
    type: Number,
    default: 6
  }
} as const

export const Emits = {
  full: (): void => {}
} as const
