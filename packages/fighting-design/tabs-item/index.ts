import TabsItem from './src/tabs-item.vue'

import { install } from '../_utils'

export const FTabsItem = install(TabsItem)

/** tabs-item 组件实例类型 */
export type TabsItemInstance = InstanceType<typeof TabsItem>

export * from './src/interface'

export default FTabsItem
