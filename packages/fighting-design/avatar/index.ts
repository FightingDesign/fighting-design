import Avatar from './src/avatar.vue'

import { install } from '../_utils'

export const FAvatar = install(Avatar)

/** avatar 组件实例类型 */
export type AvatarInstance = InstanceType<typeof Avatar>

export * from './src/interface'

export default FAvatar
