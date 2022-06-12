import type { PropType } from 'vue'
import type {
  buttonSize,
  buttonTarget,
  buttonType,
  buttonNativeType
} from './interface'

export const Props = {
  blob: {
    type: Boolean,
    default: (): boolean => false
  },
  circle: {
    type: Boolean,
    default: (): boolean => false
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  fontSize: {
    type: String,
    default: (): string => ''
  },
  fontColor: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: String as PropType<buttonSize>,
    default: (): buttonSize => 'middle',
    validator: (val: buttonSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  href: {
    type: String,
    default: (): string => ''
  },
  target: {
    type: String as PropType<buttonTarget>,
    default: (): buttonTarget => '_self',
    validator: (val: buttonTarget): boolean => {
      return (['_blank', '_self', '_parent', '_top'] as const).includes(val)
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
  loadingIcon: {
    type: String,
    default: (): string => ''
  },
  type: {
    type: String as PropType<buttonType>,
    default: (): buttonType => 'default',
    validator: (val: buttonType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
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
  nativeType: {
    type: String as PropType<buttonNativeType>,
    default: (): buttonNativeType => 'button',
    validator: (val: buttonNativeType): boolean => {
      return (['button', 'submit', 'reset'] as const).includes(val)
    }
  },
  simple: {
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
  ripples: {
    type: Boolean,
    default: (): boolean => true
  },
  ripplesColor: {
    type: String,
    default: (): string => '#fff'
  },
  color: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  click: (evt: Event): Event => evt
} as const
