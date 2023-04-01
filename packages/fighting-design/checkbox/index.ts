import Checkbox from './src/checkbox.vue'

import { install } from '../_utils'

export const FCheckbox = install(Checkbox)

/** check-box 组件实例类型 */
export type CheckboxInstance = InstanceType<typeof Checkbox>

export * from './src/interface'

export default FCheckbox
