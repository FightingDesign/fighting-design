import Breadcrumb from './src/breadcrumb.vue'

import { install } from '../_utils'

export const FBreadcrumb = install(Breadcrumb)

export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>

export * from './src/interface.d'

export default FBreadcrumb
