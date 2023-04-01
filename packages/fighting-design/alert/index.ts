import Alert from './src/alert.vue'

import { install } from '../_utils'

export const FAlert = install(Alert)

/** alert 组件实例类型 */
export type AlertInstance = InstanceType<typeof Alert>

export * from './src/interface'

export default FAlert
