import Loading from './src/loading.vue'

import { install } from '../_utils'

export const FLoading = install(Loading)

export type LoadingInstance = InstanceType<typeof Loading>

export * from './src/interface.d'

export default Loading
