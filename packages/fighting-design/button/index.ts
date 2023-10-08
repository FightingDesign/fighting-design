import Button from './src/button.vue'

import style from '../../fighting-theme/src/button.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FButton: ComponentPublicInstance = installWebComponent(Button, style)

/** button 组件实例类型 */
export type ButtonInstance = InstanceType<typeof Button>

export * from './src/interface'

export default FButton
