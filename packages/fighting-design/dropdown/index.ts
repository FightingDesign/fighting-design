import Dropdown from './src/dropdown.vue'

import style from '../../fighting-theme/src/date-picker.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FDropdown: ComponentPublicInstance = installWebComponent(Dropdown, style)

export * from './src/interface'

export default FDropdown
