import Progress from './src/progress.vue'

import { install } from '../_utils'

export const FProgress = install(Progress)

export type ProgressInstance = InstanceType<typeof Progress>

export * from './src/interface.d'

export default Progress
