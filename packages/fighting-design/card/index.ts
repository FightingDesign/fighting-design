import Card from './src/card.vue'

import { install } from '../_utils'

export const FCard = install(Card)

export type FCardInstance = InstanceType<typeof Card>

declare module 'vue' {
  export interface GlobalComponents {
    FCard: typeof FCard
  }
}
