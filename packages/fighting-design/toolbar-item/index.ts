import FToolbarItem from './src/toolbar-item.vue'

import { install } from '../_utils'

install(FToolbarItem, FToolbarItem.name)

export type FToolbarItemInstance = InstanceType<typeof FToolbarItem>

export default FToolbarItem
