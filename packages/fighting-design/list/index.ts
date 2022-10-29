import List from './src/list.vue'

import { install } from '../_utils'

export const FList = install(List)

export type ListInstance = InstanceType<typeof List>

export * from './src/interface.d'

export default List
