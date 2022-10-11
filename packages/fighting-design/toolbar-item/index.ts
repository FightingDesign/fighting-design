import ToolbarItem from './src/toolbar-item.vue'

import { install } from '../_utils'

export const FToolbarItem = install(ToolbarItem)

export type ToolbarItemInstance = InstanceType<typeof ToolbarItem>

export type { ToolbarItemPropsType } from './src/toolbar-item'

declare module 'vue' {
  export interface GlobalComponents {
    FToolbarItem: typeof FToolbarItem
  }
}
