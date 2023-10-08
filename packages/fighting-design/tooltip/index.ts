import Tooltip from './src/tooltip.vue'

import style from '../../fighting-theme/src/tooltip.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTooltip: ComponentPublicInstance = installWebComponent(Tooltip, style)

/** tooltip 组件实例类型 */
export type TooltipInstance = InstanceType<typeof Tooltip>

export * from './src/interface'

export default FTooltip
