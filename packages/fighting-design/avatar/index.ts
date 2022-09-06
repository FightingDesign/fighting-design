import Avatar from './src/avatar.vue'

import { install } from '../_utils'

export const FAvatar = /* @__PURE__ */ (() => install(Avatar))()

export type FAvatarInstance = InstanceType<typeof Avatar>
