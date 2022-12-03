import MenuItemGroup from './src/menu-item-group.vue'

import { install } from '../_utils'

export const FMenuItemGroup = install(MenuItemGroup)

export type MenuItemGroupInstance = InstanceType<typeof MenuItemGroup>

export * from './src/interface.d'

export default MenuItemGroup
