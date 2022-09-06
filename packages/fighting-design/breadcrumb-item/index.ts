import BreadcrumbItem from './src/breadcrumb-item.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(BreadcrumbItem)

export const FBreadcrumbItem = BreadcrumbItem

export type FBreadcrumbItemInstance = InstanceType<typeof BreadcrumbItem>
