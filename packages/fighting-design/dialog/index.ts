import Dialog from './src/dialog.vue'

import style from '../../fighting-theme/src/dialog.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FDialog: ComponentPublicInstance = installWebComponent(Dialog, style)

/** dialog 组件实例类型 */
export type DialogInstance = InstanceType<typeof Dialog>

export * from './src/interface'

export default FDialog
