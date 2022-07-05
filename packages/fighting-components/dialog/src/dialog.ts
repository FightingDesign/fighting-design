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
  text: {
    type: String,
    default: (): string => ''
  },
  modalClose: {
    type: Boolean,
    default: (): boolean => true
  },
  top: {
    type: String,
    default: (): string => '13vh'
  },
  closeIcon: {
    type: String
  }
} as const

export const Emits = {
  'update:visible': (val: boolean) => typeof val === 'boolean',
  open: () => true,
  'open-end': () => true,
  close: () => true,
  'close-end': () => true
} as const
