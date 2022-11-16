import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 类型
   */
  type: {
    type: String,
    default: (): null => null
  }
} as const

export type LoadingBarPropsType = ExtractPropTypes<typeof Props>
