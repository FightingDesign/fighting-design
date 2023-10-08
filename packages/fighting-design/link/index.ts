import Link from './src/link.vue'

import style from '../../fighting-theme/src/link.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FLink: ComponentPublicInstance = installWebComponent(Link, style)

/** link 组件实例型 */
export type LinkInstance = InstanceType<typeof Link>

export * from './src/interface'

export default FLink
