import type { PropType } from 'vue'
import type { progressType } from './interface'

export const Props = {
  percentage: {
    type: Number,
    default: (): Number => 10
  },
  type: {
    type: String as PropType<progressType>,
    default: (): progressType => 'default',
    validator: (val: progressType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
    }
  },
  square: {
    type: Boolean,
    default: (): boolean => false
  },
  linear: {
    type: Boolean,
    default: (): boolean => false
  },
  showText: {
    type: Boolean,
    default: (): Boolean => false
  },
  color: {
    type: String,
    default: (): string => ''
  },
  background: {
    type: String,
    default: (): string => ''
  },
  width: {
    type: String,
    default: (): string => ''
  },
  height: {
    type: String,
    default: (): string => ''
  }
} as const
