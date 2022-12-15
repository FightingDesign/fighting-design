import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * label
   */
  label: {
    type: String,
    default: (): null => null
  }
} as const

export type FormItemProps = ExtractPropTypes<typeof Props>
