import Badge from './src/badge.vue'

import { install } from '../_utils'

export const FBadge = install(Badge)

export type FBadgeInstance = InstanceType<typeof Badge>

declare module 'vue' {
  export interface GlobalComponents {
    FBadge: typeof FBadge
  }
}
