import Divider from './src/divider.vue'

import { install } from '../_utils'

export const FDivider = install(Divider)

/** divider 组件实例类型 */
export type DividerInstance = InstanceType<typeof Divider>

export * from './src/interface'

export default FDivider
