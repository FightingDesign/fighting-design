import Trigger from './src/trigger.vue'

import style from '../../fighting-theme/src/trigger.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTrigger: ComponentPublicInstance = installWebComponent(Trigger, style)

/** trigger 组件实例类型 */
export type TriggerInstance = InstanceType<typeof Trigger>

export * from './src/interface'

export default FTrigger
