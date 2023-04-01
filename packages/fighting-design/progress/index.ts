import Progress from './src/progress.vue'

import { install } from '../_utils'

export const FProgress = install(Progress)

/** progress 组件实例类型 */
export type ProgressInstance = InstanceType<typeof Progress>

export * from './src/interface'

export default FProgress
