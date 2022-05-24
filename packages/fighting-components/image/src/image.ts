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
    default: (): boolean => true
  },
  lazy: {
    type: Boolean,
    default: (): boolean => false
  },
  rootMargin: {
    type: String,
    default: (): string => '100px'
  }
} as const
