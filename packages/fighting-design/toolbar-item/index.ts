import ToolbarItem from './src/toolbar-item.vue'

import { install } from '../_utils'

export const FToolbarItem = install(ToolbarItem)

export type ToolbarItemInstance = InstanceType<typeof ToolbarItem>

export * from './src/interface.d'

export default FToolbarItem
