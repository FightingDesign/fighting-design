import BackTop from './src/back-top.vue'

import { install } from '../_utils'

export const FBackTop = install(BackTop)

/** back-top 组件实例类型 */
export type BackTopInstance = InstanceType<typeof BackTop>

export * from './src/interface'

export default FBackTop
