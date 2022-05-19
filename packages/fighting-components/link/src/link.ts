import type { PropType } from 'vue'

type Type = 'primary' | 'success' | 'danger' | 'warning' | 'info'
type Target = '_self' | '_blank' | '_parent' | '_top'
type Hover = 'line' | 'bag'

export const Props = {
  type: {
    type: String as PropType<Type>,
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
  hover: {
    type: String as PropType<Hover>,
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
    type: String as PropType<Target>,
    validator(val: string): boolean {
      return ['_self', '_blank', '_parent', '_top', ''].includes(val)
    },
    default: (): string => ''
  },
  underline: {
    type: Boolean,
    default: (): boolean => false
  },
  color: {
    type: String,
    default: (): string => ''
  },
  noCopy: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export const Emits = {
  click: (evt: Event): Event => evt
} as const
