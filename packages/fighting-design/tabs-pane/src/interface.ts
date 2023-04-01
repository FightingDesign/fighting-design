import type { TabsModelValue } from '../../tabs'
import type { TabsPaneProps } from './props'
import type { Slots, Ref } from 'vue'

export type { TabsPaneProps } from './props'

/** tabs-pane 组件示例类型接口 */
export interface TabsPaneInstance {
  paneName: Ref<TabsModelValue>
  label: unknown
  uid: number
  slots: Readonly<Slots>
  prop: TabsPaneProps
}
