import Breadcrumb from './src/breadcrumb.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Breadcrumb)

export const FBreadcrumb = Breadcrumb

export type FBreadcrumbInstance = InstanceType<typeof Breadcrumb>
