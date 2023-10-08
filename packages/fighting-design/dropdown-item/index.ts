import DropdownItem from './src/dropdown-item.vue'

import style from '../../fighting-theme/src/dropdown-item.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FDropdownItem: ComponentPublicInstance = installWebComponent(DropdownItem, style)

/** dropdown-item 组件实例类型 */
export type DropdownItemInstance = InstanceType<typeof DropdownItem>

export * from './src/interface'

export default FDropdownItem
