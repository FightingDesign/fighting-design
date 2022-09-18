export const Props = {
  date: {
    type: Date,
    default: (): Date => new Date,
    required: true
  },
  lunar: {
    type: Boolean,
    default: (): boolean => false
  },
  showHeader: {
    type: Boolean,
    default: (): boolean => true
  },
  square: {
    type: Boolean,
    default: (): boolean => false
  }
} as const
