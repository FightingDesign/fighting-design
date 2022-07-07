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
    default: (): string => '332px'
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
    default: (): Number => 1999
  }
} as const

export const Emits = {
  'update:visible': (val: boolean) => typeof val === 'boolean',
  open: () => true,
  'open-end': () => true,
  close: () => true,
  'close-end': () => true
} as const
