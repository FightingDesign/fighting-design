import { install } from '../_utils'
import Input from './src/input.vue'

export const FInput = install(Input)

export type InputInstance = InstanceType<typeof Input>

export * from './src/interface.d'

export default Input
