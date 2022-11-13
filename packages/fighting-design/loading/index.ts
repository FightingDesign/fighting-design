import Loading from './src/loading.vue'
import { vLoading } from './src/directive'

import { install, installDirective } from '../_utils'

export const FLoadingDirective = installDirective(vLoading, 'loading')
export const FLoading = install({
  directive: FLoadingDirective
})

export type LoadingInstance = InstanceType<typeof Loading>

export * from './src/interface.d'

export default Loading
