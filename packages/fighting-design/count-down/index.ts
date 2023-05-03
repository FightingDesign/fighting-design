import CountDown from './src/count-down.vue'

import { install } from '../_utils'

export const FCountDown = install(CountDown)

export type CountDownInstance = InstanceType<typeof CountDown>

export * from './src/interface.d'

export default FCountDown
