import Select from './src/select.vue'

import { install } from '../_utils'

export const FSelect = install(Select)

export type SelectInstance = InstanceType<typeof Select>

export * from './src/interface.d'

export default Select
