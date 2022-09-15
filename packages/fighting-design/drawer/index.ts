import Drawer from './src/drawer.vue'

import { install } from '../_utils'

export const FDrawer =  install(Drawer)

export type FDrawerInstance = InstanceType<typeof Drawer>

declare module 'vue' {
  export interface GlobalComponents {
    FDrawer: typeof FDrawer
  }
}
