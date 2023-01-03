import Empty from './src/empty.vue'

import { install } from '../_utils'

export const FEmpty = install(Empty)

export type EmptyInstance = InstanceType<typeof Empty>

export * from './src/interface.d'

export default FEmpty
