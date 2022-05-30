import { PropType } from 'vue'
import type { imageFit } from '@fighting-design/fighting-type'

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
    type: String,
    default: (): string => '100px'
  },
  width: {
    type: String,
    default: (): string => ''
  },
  height: {
    type: String,
    default: (): string => ''
  },
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  fit: {
    type: String as PropType<imageFit>,
    default: (): string => '',
    validator(val: string): boolean {
      return ['fill', 'contain', 'cover', 'none', 'scale-down', ''].includes(
        val
      )
    }
  },
  select: {
    type: Boolean,
    default: (): boolean => false
  },
  referrerPolicy: {
    type: String,
    default: (): string => ''
  },
  previewList: {
    type: Array as PropType<string[]>,
    default: (): [] => []
  },
  previewShowIndex: {
    type: Number,
    default: (): number => 0
  },
  previewZIndex: {
    type: Number,
    default: (): number => 999
  },
  previewShowOption: {
    type: Boolean,
    default: (): boolean => true
  },
  round: {
    type: String,
    default: (): string => ''
  },
  errSrc: {
    type: String,
    default: (): string => ''
  },
  caption: {
    type: String,
    default: (): string => ''
  },
  captionColor: {
    type: String,
    default: (): string => '#fff'
  },
  modalClose: {
    type: Boolean,
    default: (): boolean => true
  },
  showCloseBtn: {
    type: Boolean,
    default: (): boolean => true
  }
} as const

export const Emits = {
  load: (evt: Event): boolean => evt instanceof Event,
  error: (evt: Event): boolean => evt instanceof Event
} as const
