import { setBooleanProp, setStringProp, setStringNumberProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { TabsModelValue } from '../../tabs'

export const Props = {
  /** 每个标签的 key */
  name: setStringNumberProp<TabsModelValue>(),
  /** label 上显示的文字 */
  label: setStringProp(),
  /** 是否懒加载 */
  lazy: setBooleanProp()
} as const

export type TabsItemProps = ExtractPropTypes<typeof Props>
