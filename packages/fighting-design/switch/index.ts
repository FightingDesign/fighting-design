import Switch from './src/switch.vue'

import { install } from '../_utils'

export const FSwitch = install(Switch)

export type FSwitchInstance = InstanceType<typeof Switch>

declare module 'vue' {
  export interface GlobalComponents {
    FSwitch: typeof FSwitch
  }
}

export type { switchSizeType } from './src/interface'
