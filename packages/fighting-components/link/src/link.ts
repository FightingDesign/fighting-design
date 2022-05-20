import type { PropType } from 'vue'
import type { linkType, linkTarget, linkHover } from '@fighting-design/fighting-type'

export const Props = {
  type: {
    type: String as PropType<linkType>,
    default: (): string => 'primary',
    validator(val: string): boolean {
      return [
        'primary',
        'success',
        'danger',
        'warning',
        'info',
        ''
      ].includes(val)
    }
  },
  href: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: String,
    default: (): string => ''
  },
  state: {
    type: String as PropType<linkHover>,
    validator(val: string): boolean {
      return ['line', 'bag', ''].includes(val)
    },
    default: (): string => ''
  },
  prohibit: {
    type: Boolean,
    default: (): boolean => false
  },
  leftIcon: {
    type: String,
    default: (): string => ''
  },
  rightIcon: {
    type: String,
    default: (): string => ''
  },
  target: {
    type: String as PropType<linkTarget>,
    validator(val: string): boolean {
      return ['_self', '_blank', '_parent', '_top', ''].includes(val)
    },
    default: (): string => ''
  },
  color: {
    type: String,
    default: (): string => ''
  },
  noCopy: {
    type: Boolean,
    default: (): boolean => false
  },
  noLink: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export const Emits = {
  click: (evt: Event): Event => evt
} as const
