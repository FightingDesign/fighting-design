import FDrawer from './src/drawer.vue'

import { install } from '../_utils'

install(FDrawer, FDrawer.name)

export type FDrawerInstance = InstanceType<typeof FDrawer>

export default FDrawer
