import StickyCard from './src/sticky-card.vue'

import { install } from '../_utils'

export const FStickyCard = install(StickyCard)

/** sticky-card 组件实例类型 */
export type StickyCardInstance = InstanceType<typeof StickyCard>

export * from './src/interface'

export default FStickyCard
