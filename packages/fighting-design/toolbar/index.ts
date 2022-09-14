import Toolbar from './src/toolbar.vue'

import { install } from '../_utils'

export const FToolbar = install(Toolbar)

export type FToolbarInstance = InstanceType<typeof Toolbar>

declare module 'vue' {
  export interface GlobalComponents {
    FToolbar: typeof FToolbar
  }
}
