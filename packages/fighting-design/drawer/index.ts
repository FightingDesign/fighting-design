import Drawer from './src/drawer.vue'

import { install } from '../_utils'

export const FDrawer = /* @__PURE__ */ () => install(Drawer)

export type FDrawerInstance = InstanceType<typeof Drawer>
