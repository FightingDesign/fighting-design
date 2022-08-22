import FToolbar from './src/toolbar.vue'

import { install } from '../_utils'

install(FToolbar, FToolbar.name)

export type FToolbarInstance = InstanceType<typeof FToolbar>

export default FToolbar
