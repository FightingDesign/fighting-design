import InputNumber from './src/input-number.vue'

import { install } from '../_utils'

export const FInputNumber = install(InputNumber)

export type InputNumberInstance = InstanceType<typeof InputNumber>

export * from './src/interface.d'

export default FInputNumber
