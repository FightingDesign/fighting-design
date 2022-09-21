import Divider from './src/divider.vue'

import { install } from '../_utils'

export const FDivider = install(Divider)

export type FDividerInstance = InstanceType<typeof Divider>

declare module 'vue' {
  export interface GlobalComponents {
    FDivider: typeof FDivider
  }
}

export type { positionType, dividerType } from './src/interface'
