import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'
import type { DialogCallBackInterface } from './interface'

export const Props = {
  visible: {
    type: Boolean,
    default: (): boolean => false,
    required: true
  },
  title: {
    type: String,
    default: (): string => ''
  },
  appendToBody: {
    type: Boolean,
    default: (): boolean => false
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  fullscreen: {
    type: Boolean,
    default: (): boolean => false
  },
  showMask: {
    type: Boolean,
    default: (): boolean => true
  },
  maskClose: {
    type: Boolean,
    default: (): boolean => true
  },
  maskBlur: {
    type: Boolean,
    default: (): boolean => false
  },
  showCloseIcon: {
    type: Boolean,
    default: (): boolean => true
  },
  closeIcon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  zIndex: {
    type: Number,
    default: (): Number => 1999,
    validator: (val: number): boolean => val >= 0
  },
  open: {
    type: Function as PropType<DialogCallBackInterface>,
    default: (): null => null
  },
  openEnd: {
    type: Function as PropType<DialogCallBackInterface>,
    default: (): null => null
  },
  close: {
    type: Function as PropType<DialogCallBackInterface>,
    default: (): null => null
  },
  closeEnd: {
    type: Function as PropType<DialogCallBackInterface>,
    default: (): null => null
  }
} as const

export const Emits = {
  'update:visible': (visible: boolean): boolean => typeof visible === 'boolean'
} as const

export type DialogPropsType = ExtractPropTypes<typeof Props>
