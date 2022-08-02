export const Props = {
  to: {
    type: [String, Object],
    default: (): string => ''
  },
  replace: {
    type: Boolean,
    default: (): boolean => false
  }
}
