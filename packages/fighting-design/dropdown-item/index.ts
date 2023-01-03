import DropdownItem from './src/dropdown-item.vue'

import { install } from '../_utils'

export const FDropdownItem = install(DropdownItem)

export type DropdownItemInstance = InstanceType<typeof DropdownItem>

export * from './src/interface.d'

export default FDropdownItem
