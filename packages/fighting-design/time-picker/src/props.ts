import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 绑定值 当前的时间
   */
  time: {
    type: String,
    default: (): null => null
  }
} as const

export type TimePickerPropsType = ExtractPropTypes<typeof Props>
