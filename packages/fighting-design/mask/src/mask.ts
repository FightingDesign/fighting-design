import type { ExtractPropTypes } from 'vue'

export const Props = {
  visible: {
    type: Boolean,
    default: (): boolean => false,
    required: true
  },
  appendToBody: {
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
  zIndex: {
    type: Number,
    default: (): Number => 1999,
    validator: (val: number): boolean => val >= 0
  },
  maskBackground: {
    type: String,
    default: (): string => ''
  },
  maskOpacity: {
    type: Number,
    default: (): null => null,
    validator: (val: number): boolean => val >= 0 && val <= 1
  }
} as const

export const Emits = {
  'update:visible': (visible: boolean): boolean => typeof visible === 'boolean',
  open: (event: MouseEvent): MouseEvent => event,
  close: (event: MouseEvent): MouseEvent => event,
  'open-end': (event: MouseEvent): MouseEvent => event,
  'close-end': (event: MouseEvent): MouseEvent => event
} as const

export type MaskPropsType = ExtractPropTypes<typeof Props>
