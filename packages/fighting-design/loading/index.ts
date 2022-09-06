import Loading from './src/loading.vue'

import { install } from '../_utils'

export const FLoading = /* @__PURE__ */ () => install(Loading)

export type FLoadingInstance = InstanceType<typeof Loading>
