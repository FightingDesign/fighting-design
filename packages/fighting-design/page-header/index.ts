import FPageHeader from './src/page-header.vue'

import { install } from '../_utils'

install(FPageHeader, FPageHeader.name)

export type FPageHeaderInstance = InstanceType<typeof FPageHeader>

export default FPageHeader
