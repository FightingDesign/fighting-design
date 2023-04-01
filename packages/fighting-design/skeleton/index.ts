import Skeleton from './src/skeleton.vue'

import { install } from '../_utils'

export const FSkeleton = install(Skeleton)

/** skeleton 组件实例类型 */
export type SkeletonInstance = InstanceType<typeof Skeleton>

export * from './src/interface'

export default FSkeleton
