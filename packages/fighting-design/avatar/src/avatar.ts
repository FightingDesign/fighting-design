import type { PropType, ExtractPropTypes } from 'vue'
import type { avatarFit, avatarSize } from './interface'

export const Props = {
  src: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  errSrc: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  alt: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  round: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  lazy: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  fit: {
    type: String as PropType<string> as PropType<avatarFit>,
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
    type: String as PropType<string>,
    default: (): string => ''
  },
  icon: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  fontSize: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  fontColor: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  text: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  rootMargin: {
    type: String as PropType<string>,
    default: (): string => '100px'
  },
  loadAnimation: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  }
} as const

export const Emits = {
  load: (evt: Event): boolean => evt instanceof Event,
  error: (evt: Event): boolean => evt instanceof Event
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
