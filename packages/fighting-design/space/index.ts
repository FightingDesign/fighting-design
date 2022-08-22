import FSpace from './src/space.vue'

import { install } from '../_utils'

install(FSpace, FSpace.name)

export type FSpaceInstance = InstanceType<typeof FSpace>

export default FSpace
