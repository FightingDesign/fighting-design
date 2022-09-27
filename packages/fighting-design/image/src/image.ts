import type { PropType, ExtractPropTypes } from 'vue'
import type { imageFit } from './interface'

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
    type: String as PropType<imageFit>,
    default: (): imageFit => '',
    validator: (val: imageFit): boolean => {
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
  // caption: {
  //   type: String,
  //   default: (): string => ''
  // },
  // captionColor: {
  //   type: String,
  //   default: (): string => '#fff'
  // },
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

export type FPropsType = ExtractPropTypes<typeof Props>
