import Table from './src/table.vue'

import { install } from '../_utils'

export const FTable = install(Table)

export type TableInstance = InstanceType<typeof Table>

export * from './src/interface.d'

export default Table
