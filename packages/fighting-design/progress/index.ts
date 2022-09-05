import Progress from './src/progress.vue'

import { install } from '../_utils'

export const FProgress = install(Progress)

export type FProgressInstance = InstanceType<typeof Progress>
