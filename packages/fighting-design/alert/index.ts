import Alert from './src/alert.vue'

import style from '../../fighting-theme/src/alert.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FAlert: ComponentPublicInstance = installWebComponent(Alert, style)

/** alert 组件实例类型 */
export type AlertInstance = InstanceType<typeof Alert>

export * from './src/interface'

export default FAlert
