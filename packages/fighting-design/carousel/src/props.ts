export const Props = {
  data: {
    type: Array,
    default: (): [] => []
  },
  duration: {
    type: Number,
    default: (): number => 2000
  },
  autoPlay: {
    type: String,
    default: (): string => ''
  }
} as const
