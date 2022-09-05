import BreadcrumbItem from './src/breadcrumb-item.vue'

import { install } from '../_utils'

export const FBreadcrumbItem = install(BreadcrumbItem)

export type FBreadcrumbItemInstance = InstanceType<typeof BreadcrumbItem>
