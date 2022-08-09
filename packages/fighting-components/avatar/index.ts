import FAvatar from './src/avatar.vue'

import { install } from '../_utils'

install(FAvatar, FAvatar.name)

export type FAvatarInstance = InstanceType<typeof FAvatar>

export default FAvatar
