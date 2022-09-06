import Badge from './src/badge.vue'

import { install } from '../_utils'

export const FBadge = /* @__PURE__ */ () => install(Badge)

export type FBadgeInstance = InstanceType<typeof Badge>
