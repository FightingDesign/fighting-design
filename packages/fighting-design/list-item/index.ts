import ListItem from './src/list-item.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(ListItem)

export const FListItem = ListItem

export type FListItemInstance = InstanceType<typeof ListItem>
