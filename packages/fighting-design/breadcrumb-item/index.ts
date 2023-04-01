import BreadcrumbItem from './src/breadcrumb-item.vue'

import { install } from '../_utils'

export const FBreadcrumbItem = install(BreadcrumbItem)

/** breadcrumb-item 组件实例类型 */
export type BreadcrumbItemInstance = InstanceType<typeof BreadcrumbItem>

export * from './src/interface'

export default FBreadcrumbItem
