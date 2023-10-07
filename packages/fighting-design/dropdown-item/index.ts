import DropdownItem from './src/dropdown-item.vue'

import style from '../../fighting-theme/src/dropdown-item.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FDropdownItem: ComponentPublicInstance = installWebComponent(DropdownItem, style)

export * from './src/interface'

export default FDropdownItem
