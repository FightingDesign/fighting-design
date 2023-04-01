import Input from './src/input.vue'

import { install } from '../_utils'

export const FInput = install(Input)

/** input 组件实例类型 */
export type InputInstance = InstanceType<typeof Input>

export * from './src/interface'

export default FInput
