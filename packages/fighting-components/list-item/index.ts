import FListItem from './src/list-item.vue'

import { install } from '../_utils'

install(FListItem, FListItem.name)

export type FListItemInstance = InstanceType<typeof FListItem>

export default FListItem
