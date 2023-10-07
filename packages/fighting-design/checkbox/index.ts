import Checkbox from './src/checkbox.vue'

import style from '../../fighting-theme/src/checkbox.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FCheckbox: ComponentPublicInstance = installWebComponent(Checkbox, style)

export * from './src/interface'

export default FCheckbox
