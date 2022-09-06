import Progress from './src/progress.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Progress)

export const FProgress = Progress

export type FProgressInstance = InstanceType<typeof Progress>
