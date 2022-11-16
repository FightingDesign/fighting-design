import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 自定义背景色
   */
  background: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义文字颜色
   */
  color: {
    type: String,
    default: (): null => null
  }
} as const

export type ListItemPropsType = ExtractPropTypes<typeof Props>
