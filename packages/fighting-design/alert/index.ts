import Alert from './src/alert.vue'

import style from '../../fighting-theme/src/alert.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FAlert: ComponentPublicInstance = installWebComponent(Alert, style)

export * from './src/interface.d'

export default FAlert
