import Swap from './src/swap.vue'

import { install } from '../_utils'

export const FSwap = install(Swap)

export type SwapInstance = InstanceType<typeof Swap>

export * from './src/interface.d'

export default FSwap
