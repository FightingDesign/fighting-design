export const props = {
  icon: {
    type: String,
    default: (): string => ''
  },
  fontClass: {
    type: String,
    default: (): string => ''
  },
  color: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: String,
    default: (): string => ''
  },
  opacity: {
    type: String,
    default: (): string => ''
  }
} as const
