import Rate from './src/rate.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Rate)

export const FRate = Rate

export type FRateInstance = InstanceType<typeof Rate>
