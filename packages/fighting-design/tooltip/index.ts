import FTooltip from './src/tooltip.vue'

import { install } from '../_utils'

export type FTooltipInstance = InstanceType<typeof FTooltip>

export default install(FTooltip, FTooltip.name)
