import type { PropType } from 'vue'
import type { avatarFit, avatarSize } from './interface'

export const Props = {
  src: {
    type: String,
    default: (): string => ''
  },
  errSrc: {
    type: String,
    default: (): string => ''
  },
  alt: {
    type: String,
    default: (): string => ''
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  lazy: {
    type: Boolean,
    default: (): boolean => false
  },
  fit: {
    type: String as PropType<avatarFit>,
    default: (): avatarFit => '',
    validator: (val: avatarFit): boolean => {
      return (
        ['fill', 'contain', 'cover', 'none', 'scale-down', ''] as const
      ).includes(val)
    }
  },
  size: {
    type: [String as PropType<avatarSize>, Number],
    default: (): avatarSize => 'middle',
    validator: (val: avatarSize): boolean => {
      if (typeof val === 'string') {
        return (['large', 'middle', 'small', 'mini'] as const).includes(val)
      } else if (typeof val === 'number') {
        return val >= 1
      }
      return false
    }
  },
  background: {
    type: String,
    default: (): string => ''
  },
  icon: {
    type: String,
    default: (): string => ''
  },
  iconSize: {
    type: String,
    default: (): string => ''
  },
  iconColor: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  load: (evt: Event): boolean => evt instanceof Event,
  error: (evt: Event): boolean => evt instanceof Event
} as const
