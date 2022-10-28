import Toolbar from './src/toolbar.vue'

import { install } from '../_utils'

export const FToolbar = install(Toolbar)

export type ToolbarInstance = InstanceType<typeof Toolbar>

export * from './src/interface.d'

export default Toolbar
