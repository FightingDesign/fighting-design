import ExpandCard from './src/expand-card.vue'

import { install } from '../_utils'

export const FExpandCard = install(ExpandCard)

export type ExpandCardInstance = InstanceType<typeof ExpandCard>

export type { ExpandCardImageListType } from './src/interface'

export type { ExpandCardPropsType } from './src/expand-card'

declare module 'vue' {
  export interface GlobalComponents {
    FExpandCard: typeof FExpandCard
  }
}
