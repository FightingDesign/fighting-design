import Swap from './src/swap.vue'

import style from '../../fighting-theme/src/swap.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FSwap: ComponentPublicInstance = installWebComponent(Swap, style)

/** swap 组件实例类型 */
export type SwapInstance = InstanceType<typeof Swap>

export * from './src/interface'

export default FSwap
