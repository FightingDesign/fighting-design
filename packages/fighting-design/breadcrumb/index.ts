import Breadcrumb from './src/breadcrumb.vue'

import { install } from '../_utils'

export const FBreadcrumb = /* @__PURE__ */ () => install(Breadcrumb)

export type FBreadcrumbInstance = InstanceType<typeof Breadcrumb>
