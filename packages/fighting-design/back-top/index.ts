import BackTop from './src/back-top.vue'

import { install } from '../_utils'

export const FBackTop = install(BackTop)

export type BackTopInstance = InstanceType<typeof BackTop>

export * from './src/interface.d'

export default FBackTop
