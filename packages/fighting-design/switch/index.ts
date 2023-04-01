import Switch from './src/switch.vue'

import { install } from '../_utils'

export const FSwitch = install(Switch)

/** switch 组件实例类型 */
export type SwitchInstance = InstanceType<typeof Switch>

export * from './src/interface'

export default FSwitch
