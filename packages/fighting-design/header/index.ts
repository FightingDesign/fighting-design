import Header from './src/header.vue'

import style from '../../fighting-theme/src/header.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FHeader: ComponentPublicInstance = installWebComponent(Header, style)

/** header 组件实例类型 */
export type HeaderInstance = InstanceType<typeof Header>

export * from './src/interface'

export default FHeader
