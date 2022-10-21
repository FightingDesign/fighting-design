import type { PropType, ExtractPropTypes, VNode, Component } from 'vue'
import type { AvatarFitType, AvatarSizeType } from './interface'

export const Props = {
  src: {
    type: String,
    default: (): string => ''
  },
  errSrc: {
    type: String,
    default: (): string => ''
  },
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
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
    type: String as PropType<AvatarFitType>,
    default: (): AvatarFitType => '',
    validator: (val: AvatarFitType): boolean => {
      return (
        ['fill', 'contain', 'cover', 'none', 'scale-down', ''] as const
      ).includes(val)
    }
  },
  size: {
    type: [String, Number] as PropType<AvatarSizeType | number>,
    default: (): AvatarSizeType => 'middle',
    validator: (val: AvatarSizeType | number): boolean => {
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
  fontSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '15px'
  },
  fontColor: {
    type: String,
    default: (): string => '#333'
  },
  text: {
    type: String,
    default: (): string => ''
  },
  rootMargin: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '100px'
  },
  loadAnimation: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export const Emits = {
  load: (evt: Event): boolean => evt instanceof Event,
  error: (evt: Event): boolean => evt instanceof Event
} as const

export type AvatarPropsType = ExtractPropTypes<typeof Props>
