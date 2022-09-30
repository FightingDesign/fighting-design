import Rate from './src/rate.vue'

import { install } from '../_utils'

export const FRate = install(Rate)

export type RateInstance = InstanceType<typeof Rate>

export type { RatePropsType } from './src/rate'

export type { RateSizeType, RateType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FRate: typeof FRate
  }
}
