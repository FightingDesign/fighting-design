import Submenu from './src/submenu.vue'

import style from '../../fighting-theme/src/submenu.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FSubmenu: ComponentPublicInstance = installWebComponent(Submenu, style)

/** submenu 组件实例类型 */
export type SubmenuInstance = InstanceType<typeof Submenu>

export * from './src/interface'

export default FSubmenu
