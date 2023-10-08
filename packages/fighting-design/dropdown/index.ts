import Dropdown from './src/dropdown.vue'

import style from '../../fighting-theme/src/date-picker.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FDropdown: ComponentPublicInstance = installWebComponent(Dropdown, style)

/** dropdown 组件实例类型 */
export type DropdownInstance = InstanceType<typeof Dropdown>

export * from './src/interface'

export default FDropdown
