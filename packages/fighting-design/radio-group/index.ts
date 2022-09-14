import RadioGroup from './src/radio-group.vue'

import { install } from '../_utils'

export const FRadioGroup = install(RadioGroup)

export type RadioGroupInstance = InstanceType<typeof RadioGroup>
