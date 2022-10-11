import StickyCard from './src/sticky-card.vue'

import { install } from '../_utils'

export const FStickyCard = install(StickyCard)

export type StickyCardInstance = InstanceType<typeof StickyCard>

export type { StickyCardPropsType } from './src/sticky-card'

export type { StickyCardEmitInterface } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FStickyCard: typeof FStickyCard
  }
}
