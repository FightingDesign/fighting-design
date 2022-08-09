import FProgress from './src/progress.vue'

import { install } from '../_utils'

install(FProgress, FProgress.name)

export type FProgressInstance = InstanceType<typeof FProgress>

export default FProgress
