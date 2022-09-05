import FAside from './src/aside.vue'

import { install } from '../_utils'

export type FAsideInstance = InstanceType<typeof FAside>

export default install(FAside, FAside.name)
