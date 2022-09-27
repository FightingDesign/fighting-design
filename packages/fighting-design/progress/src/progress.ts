import type { PropType, ExtractPropTypes } from 'vue'
import type { ProgressType } from './interface'

export const Props = {
  percentage: {
    type: Number,
    default: (): number => 10,
    validator: (val: number): boolean => {
      return val >= 0 && val <= 100
    }
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
    default: (): boolean => false
  },
  linear: {
    type: Boolean,
    default: (): boolean => false
  },
  showText: {
    type: Boolean,
    default: (): boolean => true
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
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  height: {
    type: [String, Number] as PropType<string | number>,
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

export type ProgressPropsType = ExtractPropTypes<typeof Props>
