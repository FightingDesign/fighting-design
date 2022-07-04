export const Props = {
  percentage: {
    type: Number,
    default: (): Number => 10
  },
  type: {
    type: String,
    default: (): String => 'primary'
  },
  square: {
    type: Boolean,
    default: (): Boolean => false
  },
  linear: {
    type: Boolean,
    default: (): Boolean => false
  },
  showText: {
    type: Boolean,
    default: (): Boolean => false
  },
  color: {
    type: String,
    default: (): string => ''
  },
  background: {
    type: String,
    default: (): string => ''
  },
  width: {
    type: String,
    default: (): string => ''
  },
  height: {
    type: String,
    default: (): string => ''
  }
} as const
