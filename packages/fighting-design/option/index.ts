import Option from './src/option.vue'

import { install } from '../_utils'

export const FOption = install(Option)

/** option 组件实例类型 */
export type OptionInstance = InstanceType<typeof Option>

export * from './src/interface'

export default FOption
