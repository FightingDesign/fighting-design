export const Props = {
  date: {
    type: Date,
    default: (): Date => new Date,
    required: true
  }
} as const
