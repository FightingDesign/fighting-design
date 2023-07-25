import TabsItem from './src/tabs-item.vue'

import { install } from '../_utils'

export const FTabsItem = install(TabsItem)

export type TabsItemInstance = InstanceType<typeof TabsItem>

export * from './src/interface'

export default FTabsItem
