import FSkeleton from './src/skeleton.vue'

import { install } from '../_utils'

install(FSkeleton, FSkeleton.name)

export type FSkeletonInstance = InstanceType<typeof FSkeleton>

export default FSkeleton
