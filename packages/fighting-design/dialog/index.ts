import Dialog from './src/dialog.vue'

import style from '../../fighting-theme/src/dialog.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FDialog: ComponentPublicInstance = installWebComponent(Dialog, style)

export * from './src/interface'

export default FDialog
