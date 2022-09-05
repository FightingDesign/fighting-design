import FPageHeader from './src/page-header.vue'

import { install } from '../_utils'

export type FPageHeaderInstance = InstanceType<typeof FPageHeader>

export default install(FPageHeader, FPageHeader.name)
