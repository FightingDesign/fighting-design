import Avatar from './src/avatar.vue'

import { install } from '../_utils'

export const FAvatar = install(Avatar)

export type FAvatarInstance = InstanceType<typeof Avatar>

declare module 'vue' {
  export interface GlobalComponents {
    FAvatar: typeof FAvatar
  }
}

export type { avatarFit, avatarSize } from './src/interface'
