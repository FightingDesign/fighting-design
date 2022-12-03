import Submenu from './src/submenu.vue'

import { install } from '../_utils'

export const FSubmenu = install(Submenu)

export type SubmenuInstance = InstanceType<typeof Submenu>

export * from './src/interface.d'

export default Submenu
