import type { PropType } from 'vue'
import type { ScrollBehavior } from './interface'

export const Props = {
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  isIcon: {
    type: Boolean,
    default: (): boolean => false
  },
  // icon: {
  //   type: String,
  //   default: (): string => 'f-icon-arrow-up'
  // },
  // iconSize: {
  //   type: Number,
  //   default: (): number => 40
  // },
  visibleHeight: {
    type: Number,
    default: (): number => 200
  },
  behavior: {
    type: String as PropType<ScrollBehavior>,
    default: (): ScrollBehavior => 'smooth',
    validator: (val: ScrollBehavior): boolean => {
      return (['auto', 'smooth'] as const).includes(val)
    }
  },
  right: {
    type: String,
    default: (): string => ''
  },
  bottom: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  click: (evt: Event): Event => evt
} as const
