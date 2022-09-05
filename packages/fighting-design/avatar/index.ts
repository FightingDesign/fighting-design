import FAvatar from './src/avatar.vue'

import { install } from '../_utils'

export type FAvatarInstance = InstanceType<typeof FAvatar>

export default install(FAvatar, FAvatar.name)
