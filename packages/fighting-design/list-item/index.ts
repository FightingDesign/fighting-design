import ListItem from './src/list-item.vue'

import { install } from '../_utils'

export const FListItem = install(ListItem)

/** list-item 组件实例类型 */
export type ListItemInstance = InstanceType<typeof ListItem>

export * from './src/interface'

export default FListItem
