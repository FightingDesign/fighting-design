import Select from './src/select.vue'

import style from '../../fighting-theme/src/select.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FSelect: ComponentPublicInstance = installWebComponent(Select, style)

export * from './src/interface'

export default FSelect
