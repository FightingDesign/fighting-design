import Link from './src/link.vue'

import { install } from '../_utils'

export const FLink = install(Link)

export type LinkInstance = InstanceType<typeof Link>

export * from './src/interface.d'

export default Link
