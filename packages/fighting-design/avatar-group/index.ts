import AvatarGroup from './src/avatar-group.vue'

import { install } from '../_utils'

export const FAvatarGroup = install(AvatarGroup)

export type AvatarGroupInstance = InstanceType<typeof AvatarGroup>

export * from './src/interface'

export default FAvatarGroup
