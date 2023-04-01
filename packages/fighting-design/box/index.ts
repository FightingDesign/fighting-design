import Box from './src/box.vue'

import { install } from '../_utils'

export const FBox = install(Box)

/** box 组件实例类型 */
export type BoxInstance = InstanceType<typeof Box>

export * from './src/interface'

export default FBox
