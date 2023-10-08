import Progress from './src/progress.vue'

import style from '../../fighting-theme/src/progress.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FProgress: ComponentPublicInstance = installWebComponent(Progress, style)

/** progress 组件实例类型 */
export type ProgressInstance = InstanceType<typeof Progress>

export * from './src/interface'

export default FProgress
