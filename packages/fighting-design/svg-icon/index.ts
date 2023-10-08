import SvgIcon from './src/svg-icon.vue'

import style from '../../fighting-theme/src/svg-icon.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FSvgIcon: ComponentPublicInstance = installWebComponent(SvgIcon, style)

/** svg-icon 组件实例类型 */
export type SvgIconInstance = InstanceType<typeof SvgIcon>

export * from './src/interface'

export default FSvgIcon
