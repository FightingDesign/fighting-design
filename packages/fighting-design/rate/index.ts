import FRate from './src/rate.vue'

import { install } from '../_utils'

export type FRateInstance = InstanceType<typeof FRate>

export default install(FRate, FRate.name)
