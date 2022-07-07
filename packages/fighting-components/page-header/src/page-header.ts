export const Props = {
  icon: {
    type: String,
    default: (): String => 'f-icon-leftarrow'
  },
  iconSize: {
    type: String,
    default: (): String => '12px'
  },
  backText: {
    type: String,
    default: (): String => '返回'
  },
  title: {
    type: String,
    default: (): String => '标题'
  },
  subtitle: {
    type: String,
    default: (): String => ''
  },
  titleClass: {
    type: String,
    default: (): String => ''
  },
  titleBold: {
    type: Boolean,
    default: (): Boolean => false
  },
  titleColor: {
    type: String,
    default: (): String => ''
  },
  titleCenter: {
    type: Boolean,
    default: (): Boolean => false
  }
} as const

export const Emits = {
  back: (): boolean => true
} as const
