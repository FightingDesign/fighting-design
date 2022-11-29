import type { ExtractPropTypes, PropType } from 'vue'

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
  },
  /**
   * 唯一标识
   */
  name: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  }
} as const

export type SubmenuPropsType = ExtractPropTypes<typeof Props>
