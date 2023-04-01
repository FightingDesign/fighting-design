import MenuItem from './src/menu-item.vue'

import { install } from '../_utils'

export const FMenuItem = install(MenuItem)

/** menu-item 组件实例类型 */
export type MenuItemInstance = InstanceType<typeof MenuItem>

export * from './src/interface'

export default FMenuItem
