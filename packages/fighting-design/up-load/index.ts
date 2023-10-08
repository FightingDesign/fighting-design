import UpLoad from './src/up-load.vue'

import style from '../../fighting-theme/src/up-load.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FUpLoad: ComponentPublicInstance = installWebComponent(UpLoad, style)

/** up-load 组件实例类型 */
export type UpLoadInstance = InstanceType<typeof UpLoad>

export * from './src/interface'

export default FUpLoad
