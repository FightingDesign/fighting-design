import FEmpty from './src/empty.vue'

import { install } from '../_utils'

install(FEmpty, FEmpty.name)

export type FEmptyInstance = InstanceType<typeof FEmpty>

export default FEmpty
