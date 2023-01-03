import ListItem from './src/list-item.vue'

import { install } from '../_utils'

export const FListItem = install(ListItem)

export type ListItemInstance = InstanceType<typeof ListItem>

export * from './src/interface.d'

export default FListItem
