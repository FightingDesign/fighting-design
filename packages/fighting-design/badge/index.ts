import Badge from './src/badge.vue'

import style from '../../fighting-theme/src/badge.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FBadge: ComponentPublicInstance = installWebComponent(Badge, style)

/** badge 组件实例类型 */
export type BadgeInstance = InstanceType<typeof Badge>

export * from './src/interface'

export default FBadge
