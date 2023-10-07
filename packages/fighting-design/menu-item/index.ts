import MenuItem from './src/menu-item.vue'

import style from '../../fighting-theme/src/menu.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FMenuItem: ComponentPublicInstance = installWebComponent(MenuItem, style)

export * from './src/interface'

export default FMenuItem
