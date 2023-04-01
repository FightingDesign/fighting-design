import Toolbar from './src/toolbar.vue'

import { install } from '../_utils'

export const FToolbar = install(Toolbar)

/** toolbar 组件实例类型 */
export type ToolbarInstance = InstanceType<typeof Toolbar>

export * from './src/interface'

export default FToolbar
