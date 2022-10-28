import ExpandCard from './src/expand-card.vue'

import { install } from '../_utils'

export const FExpandCard = install(ExpandCard)

export type ExpandCardInstance = InstanceType<typeof ExpandCard>

export * from './src/interface.d'

export default ExpandCard
