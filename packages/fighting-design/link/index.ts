import Link from './src/link.vue'

import { install } from '../_utils'

export const FLink = install(Link)

/** link 组件实例型 */
export type LinkInstance = InstanceType<typeof Link>

export * from './src/interface'

export default FLink
