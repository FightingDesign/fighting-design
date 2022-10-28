import type { PropType, ExtractPropTypes, VNode, Component } from 'vue'
import type { AlertType, AlertOverflowType } from './interface'

export const Props = {
  type: {
    type: String as PropType<AlertType>,
    default: (): AlertType => 'default',
    validator: (val: AlertType): boolean => {
      return (
        ['primary', 'success', 'danger', 'warning', 'default'] as const
      ).includes(val)
    }
  },
  fontSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '15px'
  },
  titleSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '17px'
  },
  bold: {
    type: Boolean,
    default: (): boolean => false
  },
  center: {
    type: Boolean,
    default: (): boolean => false
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
  titleColor: {
    type: String,
    default: (): string => ''
  },
  fixed: {
    type: Boolean,
    default: (): boolean => false
  },
  overflow: {
    type: String as PropType<AlertOverflowType>,
    default: (): AlertOverflowType => '',
    validator: (val: AlertOverflowType) => {
      return (['hidden', ''] as const).includes(val)
    }
  },
  closeIcon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  beforeIcon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  }
} as const

export const Emits = {
  'close-end': (evt: MouseEvent): MouseEvent => evt
} as const

export type AlertPropsType = ExtractPropTypes<typeof Props>
