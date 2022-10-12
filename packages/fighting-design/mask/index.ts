import Mask from './src/mask.vue'

import { install } from '../_utils'

export const FMask = install(Mask)

export type MaskInstance = InstanceType<typeof Mask>

export type { MaskPropsType } from './src/mask'

declare module 'vue' {
  export interface GlobalComponents {
    FMask: typeof FMask
  }
}
