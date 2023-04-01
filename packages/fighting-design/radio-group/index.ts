import RadioGroup from './src/radio-group.vue'

import { install } from '../_utils'

export const FRadioGroup = install(RadioGroup)

/** radio-group 组件实例类型 */
export type RadioGroupInstance = InstanceType<typeof RadioGroup>

export * from './src/interface'

export default FRadioGroup
