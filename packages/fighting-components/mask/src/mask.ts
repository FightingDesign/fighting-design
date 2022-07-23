export const Props = {
  appendToBody: {
    type: Boolean,
    default: (): boolean => false
  },
  visible: {
    type: Boolean,
    default: (): boolean => true
  },
  modal: {
    type: Boolean,
    default: (): boolean => true
  },
  zIndex: {
    type: Number,
    default: (): Number => 1999,
    validator: (val: number): boolean => val >= 0
  }
} as const

export const Emits = {
  'update:visible': (visible: boolean): boolean => typeof visible === 'boolean',
  open: (event: MouseEvent): MouseEvent => event,
  close: (event: MouseEvent): MouseEvent => event,
  'open-end': (event: MouseEvent): MouseEvent => event,
  'close-end': (event: MouseEvent): MouseEvent => event,
  'click-modal': (event: MouseEvent): MouseEvent => event
} as const
