import InfiniteScrolling from './src/infinite-scrolling.vue'

import { install } from '../_utils'

export const FInfiniteScrolling = install(InfiniteScrolling)

export type InfiniteScrolling = InstanceType<typeof FInfiniteScrolling>

export * from './src/interface.d'

export default FInfiniteScrolling
