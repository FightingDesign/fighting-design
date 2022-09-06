import Skeleton from './src/skeleton.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Skeleton)

export const FSkeleton = Skeleton

export type FSkeletonInstance = InstanceType<typeof Skeleton>
