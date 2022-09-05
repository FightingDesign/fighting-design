import Rate from './src/rate.vue'

import { install } from '../_utils'

export const FRate = install(Rate)

export type FRateInstance = InstanceType<typeof Rate>
