import FBreadcrumbItem from './src/breadcrumb-item.vue'

import { install } from '../_utils'

export type FBreadcrumbItemInstance = InstanceType<typeof FBreadcrumbItem>

export default install(FBreadcrumbItem, FBreadcrumbItem.name)
