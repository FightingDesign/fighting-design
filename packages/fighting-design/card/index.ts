import Card from './src/card.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Card)

export const FCard = Card

export type FCardInstance = InstanceType<typeof Card>
