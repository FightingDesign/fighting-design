import type { ExtractPropTypes, PropType } from 'vue'

export const Props = {
  /** 每个标签的 key */
  name: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** label 上显示的文字 */
  label: {
    type: String,
    default: (): null => null
  },
  /** 是否懒加载 */
  lazy: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type TabsPaneProps = ExtractPropTypes<typeof Props>
