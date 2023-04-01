import DropdownItem from './src/dropdown-item.vue'

import { install } from '../_utils'

export const FDropdownItem = install(DropdownItem)

/** dropdown-item 组件实例类型 */
export type DropdownItemInstance = InstanceType<typeof DropdownItem>

export * from './src/interface'

export default FDropdownItem
