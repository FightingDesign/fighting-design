import CheckboxGroup from './src/checkbox-group.vue'

import style from '../../fighting-theme/src/checkbox-group.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FCheckboxGroup: ComponentPublicInstance = installWebComponent(CheckboxGroup, style)

/** check-box-group 组件实例类型 */
export type CheckboxGroupInstance = InstanceType<typeof CheckboxGroup>

export * from './src/interface'

export default FCheckboxGroup
