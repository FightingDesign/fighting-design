import Avatar from './src/avatar.vue'

import { install } from '../_utils'

export const FAvatar = install(Avatar)

export type AvatarInstance = InstanceType<typeof Avatar>

export type { AvatarPropsType } from './src/avatar'

export type { AvatarFitType, AvatarSizeType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FAvatar: typeof FAvatar
  }
}
