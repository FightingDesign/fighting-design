import Tree from './src/tree.vue'

import { install } from '../_utils'

export const FTree = install(Tree)

export type TreeInstance = InstanceType<typeof Tree>

export type { TreePropsType } from './src/tree'

export type { TreeDataInterface } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FTree: typeof FTree
  }
}
