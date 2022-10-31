import UpLoad from './src/up-load.vue'

import { install } from '../_utils'

export const FUpLoad = install(UpLoad)

export type UpLoadInstance = InstanceType<typeof UpLoad>

export * from './src/interface.d'

export default UpLoad
