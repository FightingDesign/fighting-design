import type { PropType } from 'vue'

type Size = 'large' | 'middle' | 'small' | 'mini'
type Target = '_blank' | '_self' | '_parent' | '_top'
type IconPosition = 'left' | 'right'
type Type = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info'

export const Props = {
  blob: Boolean,
  round: Boolean,
  fontSize: String,
  fontColor: String,
  size: {
    type: String as PropType<Size>,
    default: 'middle',
    validator(val: string): boolean {
      return [
        'large',
        'middle',
        'small',
        'mini',
        ''
      ].includes(val)
    }
  },
  block: Boolean,
  link: String,
  target: {
    type: String as PropType<Target>,
    default: '_self',
    validator(val: string): boolean {
      return [
        '_blank',
        '_self',
        '_parent',
        '_top',
        ''
      ].includes(val)
    }
  },
  loading: Boolean,
  disabled: Boolean,
  icon: String,
  loadingIcon: String,
  iconPosition: {
    type: String as PropType<IconPosition>,
    default: 'left',
    validator(val: string): boolean {
      return [
        'right',
        'left',
        ''
      ].includes(val)
    }
  },
  type: {
    type: String as PropType<Type>,
    default: 'default',
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
  autofocus: Boolean,
  name: {
    type: String,
    default: 'f-button'
  },
  shadow: String,
  text: Boolean,
  long: Boolean,
  nativeType: {
    type: String,
    default: 'button'
  },
  simple: Boolean,
  border: Boolean
} as const

export const Emits = {
  click: (evt: Event): Event => evt
} as const
