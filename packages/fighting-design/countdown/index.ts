import Countdown from './src/countdown.vue'

import { install } from '../_utils'

export const FCountdown = install(Countdown)

export type CountdownInstance = InstanceType<typeof Countdown>

export * from './src/interface.d'

export default FCountdown
