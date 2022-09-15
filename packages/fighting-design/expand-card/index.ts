import ExpandCard from './src/expand-card.vue'

import { install } from '../_utils'

export const FExpandCard = install(ExpandCard)

export type FExpandCardInstance = InstanceType<typeof ExpandCard>

declare module 'vue' {
  export interface GlobalComponents {
    FExpandCard: typeof FExpandCard
  }
}
