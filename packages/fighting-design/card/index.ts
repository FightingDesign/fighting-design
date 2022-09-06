import Card from './src/card.vue'

import { install } from '../_utils'

export const FCard = /* @__PURE__ */ () => install(Card)

export type FCardInstance = InstanceType<typeof Card>
