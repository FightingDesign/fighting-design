import Avatar from './src/avatar.vue'

import style from '../../fighting-theme/src/avatar.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FAvatar: ComponentPublicInstance = installWebComponent(Avatar, style)

export * from './src/interface.d'

export default FAvatar
