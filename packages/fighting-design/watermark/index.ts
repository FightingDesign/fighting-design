import Watermark from './src/watermark.vue'

import style from '../../fighting-theme/src/watermark.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FWatermark: ComponentPublicInstance = installWebComponent(Watermark, style)

export * from './src/interface.d'

export default FWatermark
