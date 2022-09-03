import type { PropType, ExtractPropTypes } from 'vue'
import type { progressType } from './interface'

export const Props = {
  percentage: {
    type: Number as PropType<number>,
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
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  linear: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  showText: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => true
  },
  textColor: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  color: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  background: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  width: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  height: {
    type: String as PropType<string>,
    default: (): string => '6px'
  },
  stripe: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  textInside: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
