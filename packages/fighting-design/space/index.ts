import Space from './src/space.vue'

import { install } from '../_utils'

export const FSpace = install(Space)

/** space 组件实例类型 */
export type SpaceInstance = InstanceType<typeof Space>

export * from './src/interface'

export default FSpace
