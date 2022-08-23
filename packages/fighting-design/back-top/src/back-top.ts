import type { PropType, ExtractPropTypes } from 'vue'
import type { backTopBehavior } from './interface'

export const Props = {
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  behavior: {
    type: String as PropType<backTopBehavior>,
    default: (): backTopBehavior => 'smooth',
    validator: (val: backTopBehavior): boolean => {
      return (['smooth', 'auto'] as const).includes(val)
    }
  },
  visibleHeight: {
    type: Number,
    default: (): number => 200
  },
  right: {
    type: String,
    default: (): string => ''
  },
  bottom: {
    type: String,
    default: (): string => ''
  },
  zIndex: {
    type: Number,
    default: (): number => 200,
    validator: (val: number): boolean => val >= 0
  },
  top: {
    type: Number,
    default: (): number => 0
  },
  listenEl: {
    type: String,
    default: (): string => ''
  },
  background: {
    type: String,
    default: (): string => ''
  },
  color: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  click: (evt: Event): Event => evt
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
