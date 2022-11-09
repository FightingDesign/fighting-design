import type { ExtractPropTypes, PropType } from 'vue'

export const Props = {
  /**
   * 触发器和内容直接的间距
   */
  spacing: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type DropdownPropsType = ExtractPropTypes<typeof Props>
