export type { TabsProps } from './tabs'

/**
 * 触发方式
 */
export type TabsTrigger = 'hover' | 'click'

/**
 * 选项卡标签位置
 */
export type TabsPosition = 'left' | 'right' | 'top' | 'bottom'

/**
 * 选项卡风格
 *
 * line: 标准式
 * card：卡片式
 * segment: 分段式
 */
export type TabsType = 'line' | 'card' | 'segment'

/**
 * 对齐方式
 */
export type TabsJustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

/**
 * 活跃的 name
 */
export type TabsPaneName = string | number

/**
 * 切换前的回调类型
 * 
 * @param name 标签的 name
 */
export type BeforeEnter = (name: TabsPaneName) => boolean | void

/**
 * nav 列表集合
 * 
 * @param name 标签的 name
 * @param label 标签的 label
 */
export interface TabsNavInstance {
  name: TabsPaneName
  label: unknown
}
