import Badge from './src/badge.vue'

import { install } from '../_utils'

export const FBadge = install(Badge)

export type BadgeInstance = InstanceType<typeof Badge>

export type { BadgePropsType } from './src/badge'

export type { BadgeType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FBadge: typeof FBadge
  }
}
