import ExpandCard from './src/expand-card.vue'

import { install } from '../_utils'

export const FExpandCard = install(ExpandCard)

/** expand-card 组件实例类型 */
export type ExpandCardInstance = InstanceType<typeof ExpandCard>

export * from './src/interface'

export default FExpandCard
