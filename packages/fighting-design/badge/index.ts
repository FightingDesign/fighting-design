import FBadge from './src/badge.vue'

import { install } from '../_utils'

install(FBadge, FBadge.name)

export type FBadgeInstance = InstanceType<typeof FBadge>

export default FBadge
