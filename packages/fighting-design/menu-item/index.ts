import MenuItem from './src/menu-item.vue'

import { install } from '../_utils'

export const FMenuItem = install(MenuItem)

export type MenuItemInstance = InstanceType<typeof MenuItem>

export * from './src/interface.d'

export default MenuItem
