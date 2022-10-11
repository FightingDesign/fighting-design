import Toolbar from './src/toolbar.vue'

import { install } from '../_utils'

export const FToolbar = install(Toolbar)

export type ToolbarInstance = InstanceType<typeof Toolbar>

export type { ToolbarPropsType } from './src/toolbar'

export type { ToolbarType, ToolbarClickEmitInterface } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FToolbar: typeof FToolbar
  }
}
