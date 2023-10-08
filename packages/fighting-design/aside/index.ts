import Aside from './src/aside.vue'

import style from '../../fighting-theme/src/aside.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FAside: ComponentPublicInstance = installWebComponent(Aside, style)

/** aside 组件实例类型 */
export type AsideInstance = InstanceType<typeof Aside>

export * from './src/interface'

export default FAside
