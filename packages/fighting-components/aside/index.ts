import FAside from './src/aside.vue'

import { install } from '../_utils'

install(FAside, FAside.name)

export type FAsideInstance = InstanceType<typeof FAside>

export default FAside
