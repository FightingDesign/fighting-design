import Tree from './src/tree.vue'

import style from '../../fighting-theme/src/tree.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTree: ComponentPublicInstance = installWebComponent(Tree, style)

export * from './src/interface'

export default FTree
