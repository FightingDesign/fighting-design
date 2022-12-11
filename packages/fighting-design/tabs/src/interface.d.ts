export type { TabsPropsType } from './tabs'

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

export type TabsJustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'

export type TabsPaneName = string | number

export interface TabsNavInstance {
  name: TabsPaneName
  label: unknown
}

export interface TabsProvide {
  currentName: Ref<String | Number>
  updatePaneList: () => void
}
