import Option from './src/option.vue'

import { install } from '../_utils'

export const FOption = install(Option)

export type OptionInstance = InstanceType<typeof Option>

export * from './src/interface.d'

export default Option
