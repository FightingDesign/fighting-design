import FBreadcrumb from './src/breadcrumb.vue'

import { install } from '../_utils'

install(FBreadcrumb, FBreadcrumb.name)

export type FBreadcrumbInstance = InstanceType<typeof FBreadcrumb>

export default FBreadcrumb
