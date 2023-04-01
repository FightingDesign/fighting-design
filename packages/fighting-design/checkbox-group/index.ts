import CheckboxGroup from './src/checkbox-group.vue'

import { install } from '../_utils'

export const FCheckboxGroup = install(CheckboxGroup)

/** check-box-group 组件实例类型 */
export type CheckboxGroupInstance = InstanceType<typeof CheckboxGroup>

export * from './src/interface'

export default FCheckboxGroup
