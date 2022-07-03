export const Props = {
  title: {
    type: String,
    default: (): string => '',
    require: true
  },
  visible: {
    type: Boolean,
    default: (): boolean => false,
    require: true
  },
  appendToBody: {
    type: Boolean,
    default: (): boolean => true
  },
  width: {
    type: Number,
    default: (): number => 332
  },
  fullscreen: {
    type: Boolean,
    default: (): boolean => false
  },
  modal: {
    type: Boolean,
    default: (): boolean => false
  },
  lockScroll: {
    type: Boolean,
    default: (): boolean => true
  },
  showClose: {
    type: Boolean,
    default: (): boolean => true
  },
  text: {
    type: String,
    default: (): string => ''
  },
  modalClose: {
    type: Boolean,
    default: (): boolean => true
  },
  top: {
    type: Number
  }
} as const

export const Emits = {
  'update:visible': (val: boolean) => val
} as const
