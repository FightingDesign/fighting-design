export const Props = {
  content: {
    type: String,
    default: (): string => ''
  },
  width: {
    type: Number,
    default: (): number => 280
  },
  height: {
    type: Number,
    default: (): number => 200
  },
  fontSize: {
    type: String,
    default: (): string => ''
  },
  fontColor: {
    type: String,
    default: (): string => ''
  },
  image: {
    type: String,
    default: (): string => ''
  },
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  zIndex: {
    type: Number,
    default: (): number => 100
  }
} as const
