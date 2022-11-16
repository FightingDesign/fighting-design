import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 类型
   */
  type: {
    type: String,
    default: (): string => ''
  }
} as const

export type LoadingBarPropsType = ExtractPropTypes<typeof Props>
