import Divider from './src/divider.vue'

import style from '../../fighting-theme/src/divider.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FDivider: ComponentPublicInstance = installWebComponent(Divider, style)

export * from './src/interface.d'

export default FDivider
