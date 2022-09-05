import FExpandCard from './src/expandcard.vue'

import { install } from '../_utils'

install(FExpandCard, FExpandCard.name)

export type FExpandCardInstance = InstanceType<typeof FExpandCard>

export default FExpandCard