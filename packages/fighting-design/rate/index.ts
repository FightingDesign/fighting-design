import Rate from './src/rate.vue'

import { install } from '../_utils'

export const FRate = install(Rate)

/** rate 组件实例类型 */
export type RateInstance = InstanceType<typeof Rate>

export * from './src/interface'

export default FRate
