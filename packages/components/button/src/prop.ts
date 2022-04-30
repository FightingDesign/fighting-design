import { PropType } from 'vue'

type Size = 'large' | 'middle' | 'small' | 'mini' | ''
type Target = '_blank' | '_self' | '_parent' | '_top'
type IconPosition = 'left' | 'right'
type Type = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info'

export const prop = {
  blob: {
    type: Boolean,
    default: (): boolean => false
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  fontSize: {
    type: String,
    default: (): string => '14px'
  },
  fontColor: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: String as PropType<Size>,
    default: (): string => 'middle',
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
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  link: {
    type: String,
    default: (): string => ''
  },
  target: {
    type: String as PropType<Target>,
    default: (): string => '_self',
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
  loading: {
    type: Boolean,
    default: (): boolean => false
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  icon: {
    type: String,
    default: (): string => ''
  },
  loadingIcon: {
    type: String,
    default: (): string => ''
  },
  iconPosition: {
    type: String as PropType<IconPosition>,
    default: (): string => 'right',
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
  autofocus: {
    type: Boolean,
    default: (): boolean => false
  },
  name: {
    type: String,
    default: (): string => 'f-button'
  },
  shadow: {
    type: String,
    default: (): string => ''
  },
  text: {
    type: Boolean,
    default: (): boolean => false
  },
  long: {
    type: Boolean,
    default: (): boolean => false
  },
  nativeType: {
    type: String,
    default: (): string => 'button'
  },
  simple: {
    type: Boolean,
    default: (): boolean => false
  }
  // linearGradient: {
  //   type: String,
  //   default: (): string => ''
  // },
  // color: {
  //   type: String,
  //   default: (): string => ''
  // }
} as const
