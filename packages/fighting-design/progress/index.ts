import FProgress from './src/progress.vue'

import { install } from '../_utils'

export type FProgressInstance = InstanceType<typeof FProgress>

export default install(FProgress, FProgress.name)
