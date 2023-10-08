import Radio from './src/radio.vue'

import style from '../../fighting-theme/src/radio.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FRadio: ComponentPublicInstance = installWebComponent(Radio, style)

/** radio 组件实例类型 */
export type RadioInstance = InstanceType<typeof Radio>

export * from './src/interface'

export default FRadio
