import { setBooleanProp, setStringProp } from '../../_utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { TabsModelValue } from '../../tabs'

export const Props = {
  /** 每个标签的 key */
  name: {
    type: [String, Number] as PropType<TabsModelValue>,
    default: (): null => null
  },
  /** label 上显示的文字 */
  label: setStringProp(),
  /** 是否懒加载 */
  lazy: setBooleanProp()
} as const

export type TabsPaneProps = ExtractPropTypes<typeof Props>
