import Tooltip from './src/tooltip.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Tooltip)

export const FTooltip = Tooltip

export type FTooltipInstance = InstanceType<typeof Tooltip>
