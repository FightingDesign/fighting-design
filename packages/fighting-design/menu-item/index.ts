import MenuItem from './src/menu-item.vue'

import style from '../../fighting-theme/src/menu.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FMenuItem: ComponentPublicInstance = installWebComponent(MenuItem, style)

/** menu-item 组件实例类型 */
export type MenuItemInstance = InstanceType<typeof MenuItem>

export * from './src/interface'

export default FMenuItem
