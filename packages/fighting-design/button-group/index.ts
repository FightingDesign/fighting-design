import ButtonGroup from './src/button-group.vue'

import { install } from '../_utils'

export const FButtonGroup = install(ButtonGroup)

/** button-group 组件实例类型 */
export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>

export * from './src/interface'

export default FButtonGroup
