import Tooltip from './src/tooltip.vue'

import { install } from '../_utils'

export const FTooltip = install(Tooltip)

export type TooltipInstance = InstanceType<typeof Tooltip>

export type { TooltipPropsType } from './src/tooltip'

export type { TooltipPositionType, TooltipStateType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FTooltip: typeof FTooltip
  }
}
