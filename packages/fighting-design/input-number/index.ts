import InputNumber from './src/input-number.vue'

import style from '../../fighting-theme/src/input-number.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FInputNumber: ComponentPublicInstance = installWebComponent(InputNumber, style)

/** input-number 组件实例类型 */
export type InputNumberInstance = InstanceType<typeof InputNumber>

export * from './src/interface'

export default FInputNumber
