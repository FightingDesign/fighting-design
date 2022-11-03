import Badge from './src/badge.vue'

import style from '../../fighting-theme/src/badge.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FBadge: ComponentPublicInstance = installWebComponent(Badge, style)

export * from './src/interface.d'

export default FBadge
