import Dropdown from './src/dropdown.vue'

import { install } from '../_utils'

export const FDropdown = install(Dropdown)

/** dropdown 组件实例类型 */
export type DropdownInstance = InstanceType<typeof Dropdown>

export * from './src/interface'

export default FDropdown
