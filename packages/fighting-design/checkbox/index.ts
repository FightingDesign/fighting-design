import Checkbox from './src/checkbox.vue'

import { install } from '../_utils'

export const FCheckbox = install(Checkbox)

export type CheckboxInstance = InstanceType<typeof Checkbox>

export * from './src/interface.d'

export default FCheckbox
