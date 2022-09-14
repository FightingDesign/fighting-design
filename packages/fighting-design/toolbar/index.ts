import Toolbar from './src/toolbar.vue'

import { install } from '../_utils'

export const FToolbar = install(Toolbar)

export type FToolbarInstance = InstanceType<typeof Toolbar>
