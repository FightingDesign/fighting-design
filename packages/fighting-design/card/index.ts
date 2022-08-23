import FCard from './src/card.vue'

import { install } from '../_utils'

install(FCard, FCard.name)

export type FCardInstance = InstanceType<typeof FCard>

export default FCard
