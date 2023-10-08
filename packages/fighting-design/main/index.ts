import Main from './src/main.vue'

import style from '../../fighting-theme/src/main.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FMain: ComponentPublicInstance = installWebComponent(Main, style)

/** main 组件实例类型 */
export type MainInstance = InstanceType<typeof Main>

export * from './src/interface'

export default FMain
