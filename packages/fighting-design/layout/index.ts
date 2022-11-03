import Layout from './src/layout.vue'

import style from '../../fighting-theme/src/layout.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FLayout: ComponentPublicInstance = installWebComponent(Layout, style)

export * from './src/interface.d'

export default FLayout
