import Drawer from './src/drawer.vue'

import { install } from '../_utils'

export const FDrawer = install(Drawer)

export type DrawerInstance = InstanceType<typeof Drawer>

export * from './src/interface.d'

export default Drawer
