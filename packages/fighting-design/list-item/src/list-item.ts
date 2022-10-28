import type { ExtractPropTypes } from 'vue'

export const Props = {
  background: {
    type: String,
    default: (): string => ''
  },
  color: {
    type: String,
    default: (): string => ''
  }
} as const

export type ListItemPropsType = ExtractPropTypes<typeof Props>
