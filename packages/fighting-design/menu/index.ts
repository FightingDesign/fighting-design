import Menu from './src/menu.vue'

import style from '../../fighting-theme/src/menu.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FMenu: ComponentPublicInstance = installWebComponent(Menu, style)

export * from './src/interface'

export default FMenu
