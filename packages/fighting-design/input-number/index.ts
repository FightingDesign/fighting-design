import InputNumber from './src/input-number.vue'

import { install } from '../_utils'

export const FInputNumber = install(InputNumber)

/** input-number 组件实例类型 */
export type InputNumberInstance = InstanceType<typeof InputNumber>

export * from './src/interface'

export default FInputNumber
