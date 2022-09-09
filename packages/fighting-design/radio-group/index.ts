import RadioGroup from './src/radio-group.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(RadioGroup)

export const FRadioGroup = RadioGroup

export type RadioGroupInstance = InstanceType<typeof RadioGroup>
