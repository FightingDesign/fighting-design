import Pagination from './src/pagination.vue'

import { install } from '../_utils'

export const FPagination = install(Pagination)

export type PaginationInstance = InstanceType<typeof Pagination>

export * from './src/interface.d'

export default FPagination
