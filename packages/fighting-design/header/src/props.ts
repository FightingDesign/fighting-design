import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 自定义高度
   */
  height: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 自定义内边距
   */
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  }
} as const

export type HeaderPropsType = ExtractPropTypes<typeof Props>
