export const Props = {
  count: {
    type: Number,
    default: (): number => 5
  },
  readonly: {
    type: Boolean,
    default: (): boolean => false
  },
  modelValue: {
    type: Number,
    default: (): number => 0
  }
} as const

export const Emits = {
  'update:modelValue': (index: number) => index
} as const
