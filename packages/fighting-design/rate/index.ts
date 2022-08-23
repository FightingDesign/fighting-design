import FRate from './src/rate.vue'

import { install } from '../_utils'

install(FRate, FRate.name)

export type FRateInstance = InstanceType<typeof FRate>

export default FRate
