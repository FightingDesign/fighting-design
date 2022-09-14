import Tooltip from './src/tooltip.vue'

import { install } from '../_utils'

export const FTooltip = install(Tooltip)

export type FTooltipInstance = InstanceType<typeof Tooltip>

declare module 'vue' {
  export interface GlobalComponents {
    FTooltip: typeof FTooltip
  }
}
