import type { PropType } from 'vue'
import type { progressType } from './interface'

export const Props = {
  percentage: {
    type: Number,
    default: (): number => 10,
    validator: (val: number): boolean => val >= 0 && val <= 100
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
    default: (): Boolean => true
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
  },
  stripe: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export const Emits = {
  'fill-end': (): boolean => true
}
