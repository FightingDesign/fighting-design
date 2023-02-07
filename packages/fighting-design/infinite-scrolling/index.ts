import { install } from '../_utils'
import InfiniteScrolling from './src/infinite-scrolling.vue'

export const FInfiniteScrolling = install(InfiniteScrolling)

export type InfiniteScrollingInstance = InstanceType<typeof InfiniteScrolling>

export * from './src/interface.d'

export default FInfiniteScrolling
