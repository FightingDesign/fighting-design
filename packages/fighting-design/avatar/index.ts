import Avatar from './src/avatar.vue'

import { install } from '../_utils'

export const FAvatar = install(Avatar)

export type AvatarInstance = InstanceType<typeof Avatar>

export * from './src/interface.d'

export default FAvatar
