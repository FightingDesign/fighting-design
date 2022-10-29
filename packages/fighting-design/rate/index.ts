import Rate from './src/rate.vue'

import { install } from '../_utils'

export const FRate = install(Rate)

export type RateInstance = InstanceType<typeof Rate>

export * from './src/interface.d'

export default Rate
