import Submenu from './src/submenu.vue'

import { install } from '../_utils'

export const FSubmenu = install(Submenu)

/** submenu 组件实例类型 */
export type SubmenuInstance = InstanceType<typeof Submenu>

export * from './src/interface'

export default FSubmenu
