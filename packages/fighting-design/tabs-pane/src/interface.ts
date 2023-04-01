import type { TabsModelValue } from '../../tabs'
import type { TabsPaneProps } from './props'
import type { Slots } from 'vue'

export type { TabsPaneProps } from './props'

/** tabs-pane 组件示例类型接口 */
export interface TabsPane {
  paneName: TabsModelValue
  label: string
  uid: number
  slots: Readonly<Slots>
  prop: TabsPaneProps
}
