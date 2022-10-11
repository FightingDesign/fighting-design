import BackTop from './src/back-top.vue'

import { install } from '../_utils'

export const FBackTop = install(BackTop)

export type BackTopInstance = InstanceType<typeof BackTop>

export type { BackTopPropsType } from './src/back-top'

export type { BackTopBehaviorType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FBackTop: typeof FBackTop
  }
}
