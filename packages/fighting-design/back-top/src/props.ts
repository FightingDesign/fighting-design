import type { PropType, ExtractPropTypes } from 'vue'
import type { BackTopBehaviorType } from './interface'

export const Props = {
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  behavior: {
    type: String as PropType<BackTopBehaviorType>,
    default: (): BackTopBehaviorType => 'smooth',
    validator: (val: BackTopBehaviorType): boolean => {
      return (['smooth', 'auto'] as const).includes(val)
    }
  },
  visibleHeight: {
    type: Number,
    default: (): number => 200,
    validator: (val: number): boolean => val >= 0
  },
  right: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '40px'
  },
  bottom: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '40px'
  },
  zIndex: {
    type: Number,
    default: (): number => 900,
    validator: (val: number): boolean => val >= 0
  },
  top: {
    type: Number,
    default: (): number => 0,
    validator: (val: number): boolean => val >= 0
  },
  listenEl: {
    type: String,
    default: (): string => ''
  },
  background: {
    type: String,
    default: (): string => '#fff'
  },
  color: {
    type: String,
    default: (): string => '#333'
  }
} as const

export const Emits = {
  click: (evt: Event): Event => evt
} as const

export type BackTopPropsType = ExtractPropTypes<typeof Props>
