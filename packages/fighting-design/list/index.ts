import FList from './src/list.vue'

import { install } from '../_utils'

install(FList, FList.name)

export type FListInstance = InstanceType<typeof FList>

export default FList
