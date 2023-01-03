import CheckboxGroup from './src/checkbox-group.vue'

import { install } from '../_utils'

export const FCheckboxGroup = install(CheckboxGroup)

export type CheckboxGroupInstance = InstanceType<typeof CheckboxGroup>

export * from './src/interface.d'

export default FCheckboxGroup
