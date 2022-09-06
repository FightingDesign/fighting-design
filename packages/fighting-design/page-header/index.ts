import PageHeader from './src/page-header.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(PageHeader)

export const FPageHeader = PageHeader

export type FPageHeaderInstance = InstanceType<typeof PageHeader>
