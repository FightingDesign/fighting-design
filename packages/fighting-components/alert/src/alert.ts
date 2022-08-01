import type { PropType, CSSProperties } from 'vue'
import type { alertType, fixedStyleInterface } from './interface'

export const Props = {
  type: {
    type: String as PropType<alertType>,
    default: (): alertType => 'primary',
    validator: (val: alertType): boolean => {
      return (
        ['primary', 'success', 'danger', 'warning', 'default'] as const
      ).includes(val)
    }
  },
  size: {
    type: String,
    default: (): string => ''
  },
  bold: {
    type: Boolean,
    default: (): boolean => false
  },
  center: {
    type: Boolean,
    default: (): boolean => false
  },
  icon: {
    type: String,
    default: (): string => ''
  },
  close: {
    type: Boolean,
    default: (): boolean => false
  },
  simple: {
    type: Boolean,
    default: (): boolean => false
  },
  title: {
    type: String,
    default: (): string => ''
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  background: {
    type: String,
    default: (): string => ''
  },
  color: {
    type: String,
    default: (): string => ''
  },
  fixed: {
    type: Boolean,
    default: (): boolean => false
  },
  fixedStyle: {
    type: Object as PropType<fixedStyleInterface> as PropType<unknown> as PropType<CSSProperties>,
    default: (): void => {},
    validator: (val: CSSProperties): boolean => {
      if (val.bottom || val.left || val.right || val.top) {
        return true
      }
      console.warn('fighting-design (Alert): fixed-style parameter error')
      return false
    }
  }
} as const

export const Emits = {
  'close-end': (evt: MouseEvent): MouseEvent => evt
} as const
