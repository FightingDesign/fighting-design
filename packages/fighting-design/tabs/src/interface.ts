import type { Ref, Slot } from 'vue'

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

/**
 * 编辑状态类型
 *
 * @param { 'remove' | 'add' } action 删除还是添加
 * @param { string | number } [name] name
 * @param { number } [index] 索引
 */
export type TabsEdit = (
  action: 'remove' | 'add',
  name?: TabsModelValue,
  index?: number
) => void

/**
 * nav 列表集合
 *
 * @param { string | number } name 标签的 name
 * @param { * } label 标签的 label
 */
export interface TabsNavInstance {
  name: Ref<TabsModelValue>
  label: string | Slot
}
