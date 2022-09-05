import FDrawer from './src/drawer.vue'

import { install } from '../_utils'

export type FDrawerInstance = InstanceType<typeof FDrawer>

export default install(FDrawer, FDrawer.name)
