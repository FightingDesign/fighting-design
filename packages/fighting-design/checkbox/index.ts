import Checkbox from './src/checkbox.vue'

import style from '../../fighting-theme/src/checkbox.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FCheckbox: ComponentPublicInstance = installWebComponent(Checkbox, style)

/** check-box 组件实例类型 */
export type CheckboxInstance = InstanceType<typeof Checkbox>

export * from './src/interface'

export default FCheckbox
