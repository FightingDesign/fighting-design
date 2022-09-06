import Avatar from './src/avatar.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Avatar)

export const FAvatar = Avatar

export type FAvatarInstance = InstanceType<typeof Avatar>
