import FBreadcrumb from './src/breadcrumb.vue'

import { install } from '../_utils'

export type FBreadcrumbInstance = InstanceType<typeof FBreadcrumb>

export default install(FBreadcrumb, FBreadcrumb.name)
