import AvatarGroup from './src/avatar-group.vue'

import style from '../../fighting-theme/src/avatar-group.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FAvatarGroup: ComponentPublicInstance = installWebComponent(AvatarGroup, style)

/** avatar-group 组件实例类型 */
export type AvatarGroupInstance = InstanceType<typeof AvatarGroup>

export * from './src/interface'

export default FAvatarGroup
