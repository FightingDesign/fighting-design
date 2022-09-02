import type { PropType, ExtractPropTypes } from 'vue'
import type { backTopBehavior } from './interface'

export const Props = {
  round: {
    type: Boolean as PropType<boolean>,
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
    type: Number as PropType<number>,
    default: (): number => 200
  },
  right: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  bottom: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  zIndex: {
    type: Number as PropType<number>,
    default: (): number => 200,
    validator: (val: number): boolean => val >= 0
  },
  top: {
    type: Number as PropType<number>,
    default: (): number => 0
  },
  listenEl: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  background: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  color: {
    type: String as PropType<string>,
    default: (): string => ''
  }
} as const

export const Emits = {
  click: (evt: Event): Event => evt
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
