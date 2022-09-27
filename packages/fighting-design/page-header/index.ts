import PageHeader from './src/page-header.vue'

import { install } from '../_utils'

export const FPageHeader = install(PageHeader)

export type PageHeaderInstance = InstanceType<typeof PageHeader>

export type { PageHeaderPropsType } from './src/page-header'

declare module 'vue' {
  export interface GlobalComponents {
    FPageHeader: typeof FPageHeader
  }
}
