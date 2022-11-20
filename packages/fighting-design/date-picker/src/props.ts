import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 绑定值
   */
  date: {
    type: String,
    default: (): string => '',
    required: true
  }
} as const

export type DatePickerPropsType = ExtractPropTypes<typeof Props>
