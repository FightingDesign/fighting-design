import { VNode } from 'vue'

export type { TabsPropsType } from './tabs'

/**
 * 选项卡标签位置
 */
export type TabsPosition = 'left' | 'right' | 'top' | 'bottom'

export type TabsPaneName = string | number

export type TabsNavInstance = {
  name: TabsPaneName,
  label: VNode | string,
}

export type TabsProvide = {
  currentName: Ref<String | Number>
}