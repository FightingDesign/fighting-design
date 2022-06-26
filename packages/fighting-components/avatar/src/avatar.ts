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
    type: String,
    default: (): avatarSize => 'middle',
    validator: (val: avatarSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  background: {
    type: String,
    default: (): string => ''
  },
  icon: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  load: (evt: Event): boolean => evt instanceof Event,
  error: (evt: Event): boolean => evt instanceof Event
} as const
