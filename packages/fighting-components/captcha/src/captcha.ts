export const Props = {
  verifySrc: {
    type: String,
    default: (): string => ''
  },
  jigsawSrc: {
    type: String,
    default: (): string => ''
  },
  moveIcon: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {} as const
