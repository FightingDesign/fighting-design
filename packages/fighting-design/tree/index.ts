import Tree from './src/tree.vue'

import style from '../../fighting-theme/src/tree.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTree: ComponentPublicInstance = installWebComponent(Tree, style)

/** tree 组件实例类型 */
export type TreeInstance = InstanceType<typeof Tree>

export * from './src/interface'

export default FTree
