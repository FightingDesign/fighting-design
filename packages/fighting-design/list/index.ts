import List from './src/list.vue'

import { install } from '../_utils'

export const FList = install(List)

/** list 组件实例类型 */
export type ListInstance = InstanceType<typeof List>

export * from './src/interface'

export default FList
