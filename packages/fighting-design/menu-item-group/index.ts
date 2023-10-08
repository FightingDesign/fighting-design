import MenuItemGroup from './src/menu-item-group.vue'

import style from '../../fighting-theme/src/menu-item-group.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FMenuItemGroup: ComponentPublicInstance = installWebComponent(MenuItemGroup, style)

/** menu-item-group 组件实例类型 */
export type MenuItemGroupInstance = InstanceType<typeof MenuItemGroup>

export * from './src/interface'

export default FMenuItemGroup
