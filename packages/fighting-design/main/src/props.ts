import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 自定义内边距
   */
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  }
} as const

export type MainPropsType = ExtractPropTypes<typeof Props>
