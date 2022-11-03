import Tooltip from './src/tooltip.vue'

import style from '../../fighting-theme/src/tooltip.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTooltip: ComponentPublicInstance = installWebComponent(Tooltip, style)

export * from './src/interface.d'

export default FTooltip
