import Tooltip from './src/tooltip.vue'

import { install } from '../_utils'

export const FTooltip = /* @__PURE__ */ (() => install(Tooltip))()

export type FTooltipInstance = InstanceType<typeof Tooltip>
