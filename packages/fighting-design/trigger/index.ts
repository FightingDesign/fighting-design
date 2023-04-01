import Trigger from './src/trigger.vue'

import { install } from '../_utils'

export const FTrigger = install(Trigger)

/** trigger 组件实例类型 */
export type TriggerInstance = InstanceType<typeof Trigger>

export * from './src/interface'

export default FTrigger
