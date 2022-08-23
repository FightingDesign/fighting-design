import FTooltip from './src/tooltip.vue'

import { install } from '../_utils'

install(FTooltip, FTooltip.name)

export type FTooltipInstance = InstanceType<typeof FTooltip>

export default FTooltip
