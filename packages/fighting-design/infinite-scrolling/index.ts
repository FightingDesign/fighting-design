import InfiniteScrolling from './src/infinite-scrolling.vue'

import { install } from '../_utils'

export const FInfiniteScrolling = install(InfiniteScrolling)

/** infinite-scrolling 组件实例类型 */
export type InfiniteScrollingInstance = InstanceType<typeof InfiniteScrolling>

export * from './src/interface'

export default FInfiniteScrolling
