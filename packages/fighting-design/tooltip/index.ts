import Tooltip from './src/tooltip.vue'

import { install } from '../_utils'

export const FTooltip = install(Tooltip)

/** tooltip 组件实例类型 */
export type TooltipInstance = InstanceType<typeof Tooltip>

export * from './src/interface'

export default FTooltip
