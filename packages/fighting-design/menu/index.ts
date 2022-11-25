import Menu from './src/menu.vue'

import { install } from '../_utils'

export const FMenu = install(Menu)

export type MenuInstance = InstanceType<typeof Menu>

export * from './src/interface.d'

export default Menu
