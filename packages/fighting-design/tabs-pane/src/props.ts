import type { ExtractPropTypes, PropType } from 'vue'

export const Props = {
  /**
   * 每种标签的key
   */
  name: {
    type: [String, Number] as PropType<string | number>
  },
  /**
   * label上显示的文字
   */
  label: {
    type: String,
    default: ''
  },
  lazy: {
    type: Boolean,
    default: false
  }
} as const

export type TabsPanePropsType = ExtractPropTypes<typeof Props>
