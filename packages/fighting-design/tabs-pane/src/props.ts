import type { ExtractPropTypes, PropType } from 'vue'

export const Props = {
  /**
   * 每种标签的key
   */
  name: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * label上显示的文字
   */
  label: {
    type: String,
    default: (): null => null
  },
  lazy: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type TabsPaneProps = ExtractPropTypes<typeof Props>
