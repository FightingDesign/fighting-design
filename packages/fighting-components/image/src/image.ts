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
      return [
        'fill',
        'contain',
        'cover',
        'none',
        'scale-down',
        ''
      ].includes(val)
    }
  },
  select: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export const Emits = {
  load: (): boolean => true,
  error: (): boolean => false
} as const
