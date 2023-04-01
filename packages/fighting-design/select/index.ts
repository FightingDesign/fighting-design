import Select from './src/select.vue'

import { install } from '../_utils'

export const FSelect = install(Select)

/** select 组件实例类型 */
export type SelectInstance = InstanceType<typeof Select>

export * from './src/interface'

export default FSelect
