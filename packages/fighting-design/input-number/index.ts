import InputNumber from './src/input-number.vue'

import style from '../../fighting-theme/src/input-number.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FInputNumber: ComponentPublicInstance = installWebComponent(InputNumber, style)

export * from './src/interface'

export default FInputNumber
