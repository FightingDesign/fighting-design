import type { PropType } from 'vue'

type Type = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info'

export const Props = {
  type: {
    type: String as PropType<Type>,
    default: (): string => 'default',
    validator(val: string): boolean {
      return [
        'default',
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
  decoration: {},
  prohibit: {
    type: Boolean,
    default: (): boolean => false
  },
  icon: {
    type: String,
    default: (): string => ''
  },
  hover: {
    type: String,
    default: (): string => ''
  },
  target: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  click: (evt: Event): Event => evt
} as const
