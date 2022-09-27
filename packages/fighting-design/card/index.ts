import Card from './src/card.vue'

import { install } from '../_utils'

export const FCard = install(Card)

export type CardInstance = InstanceType<typeof Card>

export type { CardPropsType } from './src/card'

export type { CardShadowType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FCard: typeof FCard
  }
}
