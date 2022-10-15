import Drawer from './src/drawer.vue'

import { install } from '../_utils'

export const FDrawer = install(Drawer)

export type DrawerInstance = InstanceType<typeof Drawer>

export type { DrawerPropsType } from './src/drawer'

export type { DrawerDirectionType, DrawerCallbackInterface } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FDrawer: typeof FDrawer
  }
}
