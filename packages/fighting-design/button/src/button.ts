import type { PropType, ExtractPropTypes, VNode, Component } from 'vue'
import type {
  ButtonSizeType,
  ButtonTargetType,
  ButtonType,
  ButtonNativeType
} from './interface'

export const Props = {
  bold: {
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
    type: [String, Number] as PropType<string | number>,
    default: (): string => '14px'
  },
  fontColor: {
    type: String,
    default: (): string => '#fff'
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    default: (): ButtonSizeType => 'middle',
    validator: (val: ButtonSizeType): boolean => {
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
    type: String as PropType<ButtonTargetType>,
    default: (): ButtonTargetType => '_self',
    validator: (val: ButtonTargetType): boolean => {
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
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  type: {
    type: String as PropType<ButtonType>,
    default: (): ButtonType => 'default',
    validator: (val: ButtonType): boolean => {
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
    type: String as PropType<ButtonNativeType>,
    default: (): ButtonNativeType => 'button',
    validator: (val: ButtonNativeType): boolean => {
      return (['button', 'submit', 'reset'] as const).includes(val)
    }
  },
  simple: {
    type: Boolean,
    default: (): boolean => false
  },
  beforeIcon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  afterIcon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  ripples: {
    type: Boolean,
    default: (): boolean => false
  },
  ripplesColor: {
    type: String,
    default: (): string => ''
  },
  color: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt
} as const

export type ButtonPropsType = ExtractPropTypes<typeof Props>
