import Toolbar from './src/toolbar.vue'

import style from '../../fighting-theme/src/toolbar.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FToolbar: ComponentPublicInstance = installWebComponent(Toolbar, style)

export * from './src/interface'

export default FToolbar
