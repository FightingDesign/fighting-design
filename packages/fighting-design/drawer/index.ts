import Drawer from './src/drawer.vue'

import style from '../../fighting-theme/src/drawer.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FDrawer: ComponentPublicInstance = installWebComponent(Drawer, style)

/** drawer 组件实例类型 */
export type DrawerInstance = InstanceType<typeof Drawer>

export * from './src/interface'

export default FDrawer
