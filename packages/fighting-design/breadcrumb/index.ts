import Breadcrumb from './src/breadcrumb.vue'

import { install } from '../_utils'

export const FBreadcrumb = install(Breadcrumb)

export type FBreadcrumbInstance = InstanceType<typeof Breadcrumb>

declare module 'vue' {
  export interface GlobalComponents {
    FBreadcrumb: typeof FBreadcrumb
  }
}
