import Tooltip from './src/tooltip.vue'

import { install } from '../_utils'

export const FTooltip = install(Tooltip)

export type TooltipInstance = InstanceType<typeof Tooltip>

export * from './src/interface.d'

export default Tooltip
