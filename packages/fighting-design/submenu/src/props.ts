import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否展开
   */
  opened: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type SubmenuPropsType = ExtractPropTypes<typeof Props>
