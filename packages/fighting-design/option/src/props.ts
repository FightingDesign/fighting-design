import type { ExtractPropTypes } from 'vue'

export const Props = {
  value: {
    type: String
  }
} as const

export type OptionPropsType = ExtractPropTypes<typeof Props>
