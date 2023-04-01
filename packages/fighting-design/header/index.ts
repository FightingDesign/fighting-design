import Header from './src/header.vue'

import { install } from '../_utils'

export const FHeader = install(Header)

/** header 组件实例类型 */
export type HeaderInstance = InstanceType<typeof Header>

export * from './src/interface'

export default FHeader
