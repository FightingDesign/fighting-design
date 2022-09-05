import FListItem from './src/list-item.vue'

import { install } from '../_utils'

export type FListItemInstance = InstanceType<typeof FListItem>

export default install(FListItem, FListItem.name)
