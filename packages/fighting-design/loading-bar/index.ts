import FLoadingBar from './src/loading-bar.vue'

import { install } from '../_utils'

install(FLoadingBar, FLoadingBar.name)

export type FLoadingBarInstance = InstanceType<typeof FLoadingBar>

export default FLoadingBar
