import Drawer from './src/drawer.vue'

import style from '../../fighting-theme/src/drawer.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FDrawer: ComponentPublicInstance = installWebComponent(Drawer, style)

export * from './src/interface.d'

export default FDrawer
