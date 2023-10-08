import BackTop from './src/back-top.vue'

import style from '../../fighting-theme/src/back-top.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FBackTop: ComponentPublicInstance = installWebComponent(BackTop, style)

/** back-top 组件实例类型 */
export type BackTopInstance = InstanceType<typeof BackTop>

export * from './src/interface'

export default FBackTop
