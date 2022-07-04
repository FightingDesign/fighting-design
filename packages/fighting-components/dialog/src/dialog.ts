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
  },
  // 关闭 dialog 之前的回调，会阻塞 dialog 关闭
  beforeCloseSync: {
    type: Function
  },
  beforeClose: {
    type: Function
  },
  closeIcon: {
    type: String
  }
} as const

export const Emits = {
  'update:visible': (val: boolean) => typeof val === 'boolean'
} as const
