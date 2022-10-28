import ButtonGroup from './src/button-group.vue'

import { install } from '../_utils'

export const FButtonGroup = install(ButtonGroup)

export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>

export * from './src/interface.d'

export default ButtonGroup
