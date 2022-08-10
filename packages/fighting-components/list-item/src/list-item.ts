import type { ExtractPropTypes } from 'vue'

export const Props = {
  maxHeight: {
    type: String,
    default: (): string => ''
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
