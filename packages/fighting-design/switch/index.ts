import Switch from './src/switch.vue'

import { install } from '../_utils'

export const FSwitch = install(Switch)

export type SwitchInstance = InstanceType<typeof Switch>

export type { SwitchPropsType } from './src/switch'

export type { SwitchSizeType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FSwitch: typeof FSwitch
  }
}
