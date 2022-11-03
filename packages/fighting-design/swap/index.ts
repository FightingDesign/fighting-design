import Swap from './src/swap.vue'

import style from '../../fighting-theme/src/swap.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FSwap: ComponentPublicInstance = installWebComponent(Swap, style)

export * from './src/interface.d'

export default FSwap
