import Tree from './src/tree.vue'

import { install } from '../_utils'

export const FTree = install(Tree)

export type FTreeInstance = InstanceType<typeof Tree>

declare module 'vue' {
  export interface GlobalComponents {
    FTree: typeof FTree
  }
}

export type { treeDataInterface } from './src/interface'
