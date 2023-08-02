import Ellipsis from './src/ellipsis.vue'

import { install } from '../_utils'

export const FEllipsis = install(Ellipsis)

export type EllipsisInstance = InstanceType<typeof Ellipsis>

export * from './src/interface'

export default FEllipsis
