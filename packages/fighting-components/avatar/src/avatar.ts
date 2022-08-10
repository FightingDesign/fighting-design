import type { PropType, ExtractPropTypes } from 'vue'
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
    type: [String, Number] as PropType<avatarSize | number>,
    default: (): avatarSize => 'middle',
    validator: (val: avatarSize | number): boolean => {
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
  fontSize: {
    type: String,
    default: (): string => ''
  },
  fontColor: {
    type: String,
    default: (): string => ''
  },
  text: {
    type: String,
    default: (): string => ''
  },
  rootMargin: {
    type: String,
    default: (): string => '100px'
  }
} as const

export const Emits = {
  load: (evt: Event): boolean => evt instanceof Event,
  error: (evt: Event): boolean => evt instanceof Event
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
