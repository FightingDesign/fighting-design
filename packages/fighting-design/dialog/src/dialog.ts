import type { ExtractPropTypes, PropType } from 'vue'

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
  height: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  fullscreen: {
    type: Boolean,
    default: (): boolean => false
  },
  modal: {
    type: Boolean,
    default: (): boolean => true
  },
  showCloseIcon: {
    type: Boolean,
    default: (): boolean => true
  },
  lockScroll: {
    type: Boolean,
    default: (): boolean => true
  },
  showClose: {
    type: Boolean,
    default: (): boolean => true
  },
  modalClose: {
    type: Boolean,
    default: (): boolean => true
  },
  closeIcon: {
    type: String,
    default: (): string => ''
  },
  zIndex: {
    type: Number,
    default: (): Number => 1999,
    validator: (val: number): boolean => val >= 0
  },
  modalBlur: {
    type: Boolean,
    default: (): boolean => false
  },
  open: {
    type: Function,
    default: (): null => null
  },
  openEnd: {
    type: Function,
    default: (): null => null
  },
  close: {
    type: Function,
    default: (): null => null
  },
  closeEnd: {
    type: Function,
    default: (): null => null
  }
} as const

export const Emits = {
  'update:visible': (visible: boolean): boolean => typeof visible === 'boolean'
} as const

export type DialogPropsType = ExtractPropTypes<typeof Props>
