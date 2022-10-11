import Breadcrumb from './src/breadcrumb.vue'

import { install } from '../_utils'

export const FBreadcrumb = install(Breadcrumb)

export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>

export type { BreadcrumbPropsType } from './src/breadcrumb'

declare module 'vue' {
  export interface GlobalComponents {
    FBreadcrumb: typeof FBreadcrumb
  }
}
