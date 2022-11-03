import Waterfall from './src/waterfall.vue'

import style from '../../fighting-theme/src/waterfall.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FWaterfall: ComponentPublicInstance = installWebComponent(Waterfall, style)

export default FWaterfall
