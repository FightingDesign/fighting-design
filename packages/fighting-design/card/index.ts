import Card from './src/card.vue'

import { install } from '../_utils'

export const FCard = install(Card)

export type CardInstance = InstanceType<typeof Card>

export * from './src/interface.d'

export default Card
