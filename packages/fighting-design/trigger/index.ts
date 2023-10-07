import Trigger from './src/trigger.vue'

import style from '../../fighting-theme/src/trigger.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTrigger: ComponentPublicInstance = installWebComponent(Trigger, style)

export * from './src/interface'

export default FTrigger
