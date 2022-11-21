import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 绑定值
   */
  date: {
    type: String,
    default: (): string => ''
  }
} as const

export type DatePickerPropsType = ExtractPropTypes<typeof Props>
