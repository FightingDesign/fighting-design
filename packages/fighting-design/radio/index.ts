import Radio from './src/radio.vue'

import { install } from '../_utils'

export const FRadio = install(Radio)

/** radio 组件实例类型 */
export type RadioInstance = InstanceType<typeof Radio>

export * from './src/interface'

export default FRadio
