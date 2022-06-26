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
    default: (): string => 'rgb(25, 137, 250)'
  },
  loadingBgColor: {
    type: String,
    default: (): string => '#000'
  },
  loadingBgOpacity: {
    type: String,
    default: (): string => '0.7'
  },
  loadingTextSize: {
    type: String,
    default: (): string => '16'
  }
} as const

export const Emits = {
  close: (evt: MouseEvent): MouseEvent => evt
} as const
