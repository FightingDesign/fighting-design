import Input from './src/input.vue'

import style from '../../fighting-theme/src/input.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FInput: ComponentPublicInstance = installWebComponent(Input, style)

/** input 组件实例类型 */
export type InputInstance = InstanceType<typeof Input>

export * from './src/interface'

export default FInput
