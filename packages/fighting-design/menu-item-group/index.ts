import MenuItemGroup from './src/menu-item-group.vue'

import { install } from '../_utils'

export const FMenuItemGroup = install(MenuItemGroup)

/** menu-item-group 组件实例类型 */
export type MenuItemGroupInstance = InstanceType<typeof MenuItemGroup>

export * from './src/interface'

export default FMenuItemGroup
