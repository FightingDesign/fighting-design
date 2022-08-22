import type { PropType, ExtractPropTypes } from 'vue'
import type { progressType } from './interface'

export const Props = {
  percentage: {
    type: Number,
    default: (): number => 10,
    validator: (val: number): boolean => {
      return val >= 0 && val <= 100
    }
  },
  type: {
    type: String as PropType<progressType>,
    default: (): progressType => 'primary',
    validator: (val: progressType): boolean => {
      return (['primary', 'success', 'danger', 'warning'] as const).includes(
        val
      )
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
  textColor: {
    type: String,
    default: (): string => ''
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
    default: (): string => '6px'
  },
  stripe: {
    type: Boolean,
    default: (): boolean => false
  },
  textInside: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
