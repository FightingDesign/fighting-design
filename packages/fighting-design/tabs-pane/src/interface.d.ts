export type { TabsPaneProps } from './tabs-pane'

export interface TabsPaneInstance {
  paneName: TabsModelValue
  label: unknown
  uid: number
  slots: Readonly<InternalSlots>
  prop: TabsPaneProps
}
