import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 自定义背景色
   */
  background: {
    type: String,
    default: (): string => ''
  },
  /**
   * 自定义文字颜色
   */
  color: {
    type: String,
    default: (): string => ''
  }
} as const

export type ListItemPropsType = ExtractPropTypes<typeof Props>
