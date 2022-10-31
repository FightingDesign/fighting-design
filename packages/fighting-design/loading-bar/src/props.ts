import type { ExtractPropTypes } from 'vue'

export const Props = {
  type: {
    type: String,
    default: (): string => ''
  }
} as const

export type LoadingBarPropsType = ExtractPropTypes<typeof Props>
