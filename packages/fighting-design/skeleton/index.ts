import Skeleton from './src/skeleton.vue'

import { install } from '../_utils'

export const FSkeleton = install(Skeleton)

export type SkeletonInstance = InstanceType<typeof Skeleton>

export * from './src/interface.d'

export default FSkeleton
