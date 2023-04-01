import Menu from './src/menu.vue'

import { install } from '../_utils'

export const FMenu = install(Menu)

/** menu 组件实例类型 */
export type MenuInstance = InstanceType<typeof Menu>

export * from './src/interface'

export default FMenu
