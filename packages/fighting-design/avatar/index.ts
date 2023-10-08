import Avatar from './src/avatar.vue'

import style from '../../fighting-theme/src/avatar.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FAvatar: ComponentPublicInstance = installWebComponent(Avatar, style)

/** avatar 组件实例类型 */
export type AvatarInstance = InstanceType<typeof Avatar>

export * from './src/interface'

export default FAvatar
