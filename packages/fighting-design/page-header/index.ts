import PageHeader from './src/page-header.vue'

import { install } from '../_utils'

export const FPageHeader = install(PageHeader)

/** page-header 组件实例类型 */
export type PageHeaderInstance = InstanceType<typeof PageHeader>

export * from './src/interface'

export default FPageHeader
