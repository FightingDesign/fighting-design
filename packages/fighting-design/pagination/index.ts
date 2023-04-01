import Pagination from './src/pagination.vue'

import { install } from '../_utils'

export const FPagination = install(Pagination)

/** pagination 组件实例类型 */
export type PaginationInstance = InstanceType<typeof Pagination>

export * from './src/interface'

export default FPagination
