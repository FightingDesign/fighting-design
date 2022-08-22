import FLoading from './src/loading.vue'

import { install } from '../_utils'

install(FLoading, FLoading.name)

export type FLoadingInstance = InstanceType<typeof FLoading>

export default FLoading
