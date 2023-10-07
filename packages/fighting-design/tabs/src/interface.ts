import type { Ref } from 'vue'

export type { TabsProps } from './props'

/** 活跃的 name */
export type TabsModelValue = string | number

/** 触发方式 */
export type TabsTrigger = 'hover' | 'click'

/** 选项卡标签位置 */
export type TabsPosition = 'left' | 'right' | 'top' | 'bottom'

/** 选项卡风格 */
export type TabsType = 'line' | 'card' | 'segment'

/** 对齐方式 */
export type TabsJustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

/**
 * 切换前的回调类型
 *
 * @param {  string | number } name 标签的 name
 */
export type TabsSwitch = (name: TabsModelValue) => boolean | void

export interface TabsChildrenItem {
  label: string
  name: string | number
}

export interface TabsOpts {
  activeName: number | string
  uid: number
  label: string
}

export interface TabsProvide {
  activeName: Ref<number | string>
  registerChild: (opts: TabsOpts) => void
}
