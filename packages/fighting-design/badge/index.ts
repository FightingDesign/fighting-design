import Badge from './src/badge.vue'

import { install } from '../_utils'

export const FBadge = install(Badge)

export type BadgeInstance = InstanceType<typeof Badge>

export * from './src/interface.d'

export default Badge
