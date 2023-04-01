import Table from './src/table.vue'

import { install } from '../_utils'

export const FTable = install(Table)

/** table 组件实例类型 */
export type TableInstance = InstanceType<typeof Table>

export * from './src/interface'

export default FTable
