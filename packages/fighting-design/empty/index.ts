import Empty from './src/empty.vue'

import { install } from '../_utils'

export const FEmpty = install(Empty)

/** empty 组件实例类型 */
export type EmptyInstance = InstanceType<typeof Empty>

export * from './src/interface.d'

export default FEmpty
