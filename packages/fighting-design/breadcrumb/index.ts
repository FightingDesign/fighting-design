import Breadcrumb from './src/breadcrumb.vue'

import { install } from '../_utils'

export const FBreadcrumb = install(Breadcrumb)

/** breadcrumb 组件实例类型 */
export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>

export * from './src/interface'

export default FBreadcrumb
