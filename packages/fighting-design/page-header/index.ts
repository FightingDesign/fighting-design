import PageHeader from './src/page-header.vue'

import { install } from '../_utils'

export const FPageHeader = install(PageHeader)

export type PageHeaderInstance = InstanceType<typeof PageHeader>

export * from './src/interface.d'

export default PageHeader
