import Drawer from './src/drawer.vue'

import { install } from '../_utils'

export const FDrawer = install(Drawer)

/** drawer 组件实例类型 */
export type DrawerInstance = InstanceType<typeof Drawer>

export * from './src/interface'

export default FDrawer
