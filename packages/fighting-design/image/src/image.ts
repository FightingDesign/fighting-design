import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import type { imageFit } from './interface'

export const Props = {
  src: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  alt: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  draggable: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => true
  },
  lazy: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  rootMargin: {
    type: String as PropType<string>,
    default: (): string => '100px'
  },
  width: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  height: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  block: {
    type: Boolean as PropType<boolean>,
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
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  referrerPolicy: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  round: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  errSrc: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  caption: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  captionColor: {
    type: String as PropType<string>,
    default: (): string => '#fff'
  },
  modalClose: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => true
  },
  showCloseBtn: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => true
  },
  previewList: {
    type: Array as PropType<string[]>,
    default: (): string[] => []
  },
  previewShowIndex: {
    type: Number as PropType<number>,
    default: (): number => 0,
    validator: (val: number): boolean => {
      return val >= 0
    }
  },
  previewZIndex: {
    type: Number as PropType<number>,
    default: (): number => 999,
    validator: (val: number): boolean => {
      return val >= 0
    }
  },
  previewShowOption: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => true
  },
  previewRound: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  title: {
    type: String as PropType<string>,
    default: (): string => ''
  }
} as const

export const Emits = {
  load: (evt: Event): boolean => evt instanceof Event,
  error: (evt: Event): boolean => evt instanceof Event
} as const

export type FPropsType = ExtractPropTypes<typeof Props>

export const ImagePropsKey: InjectionKey<FPropsType> = Symbol('ImagePropsKey')
