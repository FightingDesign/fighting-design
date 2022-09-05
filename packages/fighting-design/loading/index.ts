import FLoading from './src/loading.vue'

import { install } from '../_utils'

export type FLoadingInstance = InstanceType<typeof FLoading>

export default install(FLoading, FLoading.name)
