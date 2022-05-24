export const Props = {
  src: {
    type: String,
    default: (): string => ''
  },
  alt: {
    type: String,
    default: (): string => ''
  },
  draggable: {
    type: Boolean,
    default: (): boolean => false
  }
} as const
