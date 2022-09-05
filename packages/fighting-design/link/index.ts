import FLink from './src/link.vue'

import { install } from '../_utils'

export type FLinkInstance = InstanceType<typeof FLink>

export default install(FLink, FLink.name)
