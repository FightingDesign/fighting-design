import Button from './src/button.vue'

import style from '../../fighting-theme/src/button.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FButton: ComponentPublicInstance = installWebComponent(Button, style)

export * from './src/interface'

export default FButton
