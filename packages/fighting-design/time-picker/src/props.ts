import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 绑定值 当前的时间
   */
  time: {
    type: String,
    default: (): null => null
  },
  /**
   * 是否只读
   */
  readonly: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否可清除
   */
  clear: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type TimePickerProps = ExtractPropTypes<typeof Props>
