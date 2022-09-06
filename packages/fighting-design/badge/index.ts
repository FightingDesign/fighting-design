import Badge from './src/badge.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Badge)

export const FBadge = Badge

export type FBadgeInstance = InstanceType<typeof Badge>
