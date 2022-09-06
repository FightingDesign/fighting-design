import Drawer from './src/drawer.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Drawer)

export const FDrawer = Drawer

export type FDrawerInstance = InstanceType<typeof Drawer>
