import Skeleton from './src/skeleton.vue'

import { install } from '../_utils'

export const FSkeleton = /* @__PURE__ */ () => install(Skeleton)

export type FSkeletonInstance = InstanceType<typeof Skeleton>
