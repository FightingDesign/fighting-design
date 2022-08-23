import FLink from './src/link.vue'

import { install } from '../_utils'

install(FLink, FLink.name)

export type FLinkInstance = InstanceType<typeof FLink>

export default FLink
