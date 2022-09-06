import Rate from './src/rate.vue'

import { install } from '../_utils'

export const FRate = /* @__PURE__ */ (() => install(Rate))()

export type FRateInstance = InstanceType<typeof Rate>
