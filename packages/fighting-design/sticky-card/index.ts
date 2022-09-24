import StickyCard from './src/sticky-card.vue'

import { install } from '../_utils'

export const FStickyCard = install(StickyCard)

export type FStickyCardInstance = InstanceType<typeof StickyCard>

declare module 'vue' {
  export interface GlobalComponents {
    FStickyCard: typeof FStickyCard
  }
}
