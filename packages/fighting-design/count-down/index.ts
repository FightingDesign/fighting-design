import CountDown from './src/count-down.vue'

import { install } from '../_utils'

export const FCountDown = install(CountDown)

/** count-down 组件实例类型 */
export type CountDownInstance = InstanceType<typeof CountDown>

export * from './src/interface'

export default FCountDown
