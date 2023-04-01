import Swap from './src/swap.vue'

import { install } from '../_utils'

export const FSwap = install(Swap)

/** swap 组件实例类型 */
export type SwapInstance = InstanceType<typeof Swap>

export * from './src/interface'

export default FSwap
