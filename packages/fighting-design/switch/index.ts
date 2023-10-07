import Switch from './src/switch.vue'

import style from '../../fighting-theme/src/switch.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FSwitch: ComponentPublicInstance = installWebComponent(Switch, style)

export * from './src/interface'

export default FSwitch
