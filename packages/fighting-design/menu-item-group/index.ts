import MenuItemGroup from './src/menu-item-group.vue'

import style from '../../fighting-theme/src/menu-item-group.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FMenuItemGroup: ComponentPublicInstance = installWebComponent(MenuItemGroup, style)

export * from './src/interface'

export default FMenuItemGroup
