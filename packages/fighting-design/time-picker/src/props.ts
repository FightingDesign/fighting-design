import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 绑定值
   */
  time: {
    type: String,
    default: (): string => '',
    required: true
  }
} as const

export type TimePickerPropsType = ExtractPropTypes<typeof Props>
