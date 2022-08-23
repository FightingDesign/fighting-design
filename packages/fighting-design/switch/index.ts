import FSwitch from './src/switch.vue'

import { install } from '../_utils'

install(FSwitch, FSwitch.name)

export type FSwitchInstance = InstanceType<typeof FSwitch>

export default FSwitch
