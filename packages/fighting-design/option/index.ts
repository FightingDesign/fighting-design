import Option from './src/option.vue'

import style from '../../fighting-theme/src/option.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FOption: ComponentPublicInstance = installWebComponent(Option, style)

/** option 组件实例类型 */
export type OptionInstance = InstanceType<typeof Option>

export * from './src/interface'

export default FOption
