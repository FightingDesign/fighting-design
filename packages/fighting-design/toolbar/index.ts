import Toolbar from './src/toolbar.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Toolbar)

export const FToolbar = Toolbar

export type FToolbarInstance = InstanceType<typeof Toolbar>
