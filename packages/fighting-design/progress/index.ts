import Progress from './src/progress.vue'

import { install } from '../_utils'

export const FProgress = /* @__PURE__ */ (() => install(Progress))()

export type FProgressInstance = InstanceType<typeof Progress>
