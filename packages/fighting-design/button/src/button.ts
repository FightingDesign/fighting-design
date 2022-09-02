import type { PropType, ExtractPropTypes } from 'vue'
import type {
  buttonSize,
  buttonTarget,
  buttonType,
  buttonNativeType
} from './interface'

export const Props = {
  bold: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  circle: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  round: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  fontSize: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  fontColor: {
    type: String as PropType<string>,
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
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  href: {
    type: String as PropType<string>,
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
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  loadingIcon: {
    type: String as PropType<string>,
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
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  name: {
    type: String as PropType<string>,
    default: (): string => 'f-button'
  },
  shadow: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  text: {
    type: Boolean as PropType<boolean>,
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
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  leftIcon: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  rightIcon: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  ripples: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  ripplesColor: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  color: {
    type: String as PropType<string>,
    default: (): string => ''
  }
} as const

export const Emits = {
  click: (evt: Event): Event => evt
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
