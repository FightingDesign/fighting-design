import Rate from './src/rate.vue'

import { install } from '../_utils'

export const FRate = install(Rate)

export type RateInstance = InstanceType<typeof Rate>

export type { RatePropsType } from './src/rate'

declare module 'vue' {
  export interface GlobalComponents {
    FRate: typeof FRate
  }
}
