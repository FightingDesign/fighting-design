import Loading from './src/loading.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Loading)

export const FLoading = Loading

export type FLoadingInstance = InstanceType<typeof Loading>
