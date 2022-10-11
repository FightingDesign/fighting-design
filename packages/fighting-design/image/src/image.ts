import type { PropType, ExtractPropTypes } from 'vue'
import type { ImageFitType } from './interface'

export const Props = {
  src: {
    type: String,
    default: (): string => ''
  },
  alt: {
    type: String,
    default: (): string => ''
  },
  draggable: {
    type: Boolean,
    default: (): boolean => true
  },
  lazy: {
    type: Boolean,
    default: (): boolean => false
  },
  rootMargin: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '100px'
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  fit: {
    type: String as PropType<ImageFitType>,
    default: (): ImageFitType => '',
    validator: (val: ImageFitType): boolean => {
      return (
        ['fill', 'contain', 'cover', 'none', 'scale-down', ''] as const
      ).includes(val)
    }
  },
  noSelect: {
    type: Boolean,
    default: (): boolean => false
  },
  referrerPolicy: {
    type: String,
    default: (): string => ''
  },
  round: {
    type: [String, Number] as PropType<string | number>,
    default: (): number => 0
  },
  errSrc: {
    type: String,
    default: (): string => ''
  },
  title: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  load: (evt: Event): boolean => evt instanceof Event,
  error: (evt: Event): boolean => evt instanceof Event,
  click: (evt: MouseEvent): Event => evt
} as const

export type ImagePropsType = ExtractPropTypes<typeof Props>
