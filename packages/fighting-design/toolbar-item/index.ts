import FToolbarItem from './src/toolbar-item.vue'

import { install } from '../_utils'

export type FToolbarItemInstance = InstanceType<typeof FToolbarItem>

export default install(FToolbarItem, FToolbarItem.name)
