import Dropdown from './src/dropdown.vue'

import { install } from '../_utils'

export const FDropdown = install(Dropdown)

export type DropdownInstance = InstanceType<typeof Dropdown>

export * from './src/interface.d'

export default Dropdown
