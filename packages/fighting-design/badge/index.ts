import Badge from './src/badge.vue'

import { install } from '../_utils'

export const FBadge = install(Badge)

/** badge 组件实例类型 */
export type BadgeInstance = InstanceType<typeof Badge>

export * from './src/interface'

export default FBadge
