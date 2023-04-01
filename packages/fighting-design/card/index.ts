import Card from './src/card.vue'

import { install } from '../_utils'

export const FCard = install(Card)

/** card 组件实例类型 */
export type CardInstance = InstanceType<typeof Card>

export * from './src/interface'

export default FCard
