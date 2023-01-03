import Tree from './src/tree.vue'

import { install } from '../_utils'

export const FTree = install(Tree)

export type TreeInstance = InstanceType<typeof Tree>

export * from './src/interface.d'

export default FTree
