import Loading from './src/loading.vue'

import style from '../../fighting-theme/src/loading.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FLoading: ComponentPublicInstance = installWebComponent(Loading, style)

/** loading 组件实例类型 */
export type LoadingInstance = InstanceType<typeof Loading>

export * from './src/interface'

export default FLoading
