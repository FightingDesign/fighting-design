import Ripple from './src/ripple.vue'

import { install } from '../_utils'

export const FRipple = install(Ripple)

export type RippleInstance = InstanceType<typeof Ripple>

export type { RipplePropsType } from './src/ripple'

export type { RippleType, RippleOpacityType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FRipple: typeof FRipple
  }
}
