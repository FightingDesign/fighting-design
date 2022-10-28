import BreadcrumbItem from './src/breadcrumb-item.vue'

import { install } from '../_utils'

export const FBreadcrumbItem = install(BreadcrumbItem)

export type BreadcrumbItemInstance = InstanceType<typeof BreadcrumbItem>

export default BreadcrumbItem
