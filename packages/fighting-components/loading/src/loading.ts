export const Props = {
  show: {
    type: Boolean,
    default: (): boolean => false
  },
  isClose: {
    type: Boolean,
    default: (): boolean => false
  },
  loadingText: {
    type: String,
    default: (): string => ''
  },
  loadingIcon: {
    type: String,
    default: (): string => ''
  },
  loadingTextColor: {
    type: String,
    default: (): string => ''
  },
  loadingBgColor: {
    type: String,
    default: (): string => ''
  },
  loadingBgOpacity: {
    type: Number,
    default: (): number | null => null
  },
  loadingTextSize: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  close: (evt: MouseEvent): MouseEvent => evt
} as const
