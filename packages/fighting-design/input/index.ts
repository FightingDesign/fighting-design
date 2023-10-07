import Input from './src/input.vue'

import style from '../../fighting-theme/src/input.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FInput: ComponentPublicInstance = installWebComponent(Input, style)

export * from './src/interface'

export default FInput
