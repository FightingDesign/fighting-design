import Skeleton from './src/skeleton.vue'

import { install } from '../_utils'

export const FSkeleton = install(Skeleton)

export type FSkeletonInstance = InstanceType<typeof Skeleton>

declare module 'vue' {
  export interface GlobalComponents {
    FSkeleton: typeof FSkeleton
  }
}
