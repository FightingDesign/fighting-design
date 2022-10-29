import Radio from './src/radio.vue'

import { install } from '../_utils'

export const FRadio = install(Radio)

export type RadioInstance = InstanceType<typeof Radio>

export * from './src/interface.d'

export default Radio
