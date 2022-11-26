import Trigger from './src/trigger.vue'

import { install } from '../_utils'

export const FTrigger = install(Trigger)

export type TriggerInstance = InstanceType<typeof Trigger>

export * from './src/interface.d'

export default Trigger
