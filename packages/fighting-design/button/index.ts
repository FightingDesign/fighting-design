import Button from './src/button.vue'

import { install } from '../_utils'

export const FButton = install(Button)

/** button 组件实例类型 */
export type ButtonInstance = InstanceType<typeof Button>

export * from './src/interface'

export default FButton
