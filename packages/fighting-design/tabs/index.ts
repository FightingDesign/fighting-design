import Tabs from './src/tabs.vue'

import style from '../../fighting-theme/src/tabs.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTabs: ComponentPublicInstance = installWebComponent(Tabs, style)

/** tabs 组件实例类型 */
export type TabsInstance = InstanceType<typeof Tabs>

export * from './src/interface'

export default FTabs
