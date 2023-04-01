import ToolbarItem from './src/toolbar-item.vue'

import { install } from '../_utils'

export const FToolbarItem = install(ToolbarItem)

/** toolbar-item 组件实例类型 */
export type ToolbarItemInstance = InstanceType<typeof ToolbarItem>

export * from './src/interface'

export default FToolbarItem
