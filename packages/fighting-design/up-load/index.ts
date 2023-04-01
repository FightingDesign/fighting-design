import UpLoad from './src/up-load.vue'

import { install } from '../_utils'

export const FUpLoad = install(UpLoad)

/** up-load 组件实例类型 */
export type UpLoadInstance = InstanceType<typeof UpLoad>

export * from './src/interface'

export default FUpLoad
