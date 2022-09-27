import ListItem from './src/list-item.vue'

import { install } from '../_utils'

export const FListItem = install(ListItem)

export type ListItemInstance = InstanceType<typeof ListItem>

export type { ListItemPropsType } from './src/list-item'

declare module 'vue' {
  export interface GlobalComponents {
    FListItem: typeof FListItem
  }
}
