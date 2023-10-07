import Tabs from './src/tabs.vue'

import style from '../../fighting-theme/src/tabs.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTabs: ComponentPublicInstance = installWebComponent(Tabs, style)

export * from './src/interface'

export default FTabs
