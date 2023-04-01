import Tree from './src/tree.vue'

import { install } from '../_utils'

export const FTree = install(Tree)

/** tree 组件实例类型 */
export type TreeInstance = InstanceType<typeof Tree>

export * from './src/interface'

export default FTree
