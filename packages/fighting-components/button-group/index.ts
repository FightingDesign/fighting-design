import FButtonGroup from './src/button-group.vue'

import { install } from '../_utils'

install(FButtonGroup, FButtonGroup.name)

export type FButtonGroupInstance = InstanceType<typeof FButtonGroup>

export default FButtonGroup
