import FBreadcrumbItem from './src/breadcrumb-item.vue'

import { install } from '../_utils'

install(FBreadcrumbItem, FBreadcrumbItem.name)

export type FBreadcrumbItemInstance = InstanceType<typeof FBreadcrumbItem>

export default FBreadcrumbItem
