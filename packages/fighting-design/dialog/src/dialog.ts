import type { ExtractPropTypes } from 'vue'

export const Props = {
  title: {
    type: String,
    default: (): string => ''
  },
  visible: {
    type: Boolean,
    default: (): boolean => false,
    require: true
  },
  appendToBody: {
    type: Boolean,
    default: (): boolean => false
  },
  width: {
    type: String,
    default: (): string => '521px'
  },
  height: {
    type: String,
    default: (): string => '188px'
  },
  fullscreen: {
    type: Boolean,
    default: (): boolean => false
  },
  modal: {
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
  top: {
    type: String,
    default: (): string => ''
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
  }
} as const

export const Emits = {
  'update:visible': (visible: boolean): boolean => typeof visible === 'boolean',
  open: (event: MouseEvent): MouseEvent => event,
  close: (event: MouseEvent): MouseEvent => event,
  'open-end': (event: MouseEvent): MouseEvent => event,
  'close-end': (event: MouseEvent): MouseEvent => event
} as const

export type DialogPropsType = ExtractPropTypes<typeof Props>
