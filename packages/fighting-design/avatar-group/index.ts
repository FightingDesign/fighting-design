import AvatarGroup from './src/avatar-group.vue'

import { install } from '../_utils'

export const FAvatarGroup = install(AvatarGroup)

/** avatar-group 组件实例类型 */
export type AvatarGroupInstance = InstanceType<typeof AvatarGroup>

export * from './src/interface'

export default FAvatarGroup
