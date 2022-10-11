import Skeleton from './src/skeleton.vue'

import { install } from '../_utils'

export const FSkeleton = install(Skeleton)

export type SkeletonInstance = InstanceType<typeof Skeleton>

export type { SkeletonPropsType } from './src/skeleton'

export type { SkeletonSizeType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FSkeleton: typeof FSkeleton
  }
}
